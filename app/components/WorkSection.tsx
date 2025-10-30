"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function WorkSection() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const workSection = document.querySelector(".work") as HTMLElement;
    const cardsContainer = document.querySelector(".cards") as HTMLElement;
    const moveDistance = window.innerWidth * 5;
    let currentXPosition = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // === GRID CANVAS ===
    const gridCanvas = document.createElement("canvas");
    gridCanvas.id = "grid-canvas";
    workSection.appendChild(gridCanvas);
    const gridCtx = gridCanvas.getContext("2d")!;

    const resizeGrid = () => {
      const dpr = window.devicePixelRatio || 1;
      gridCanvas.width = window.innerWidth * dpr;
      gridCanvas.height = window.innerHeight * dpr;
      gridCanvas.style.width = `${window.innerWidth}px`;
      gridCanvas.style.height = `${window.innerHeight}px`;
      gridCtx.scale(dpr, dpr);
    };
    resizeGrid();

    const drawGrid = (progress = 0) => {
      gridCtx.fillStyle = "black";
      gridCtx.fillRect(0, 0, gridCanvas.width, gridCanvas.height);
      gridCtx.fillStyle = "#f40c3f";
      const spacing = 30;
      const rows = Math.ceil(gridCanvas.height / spacing);
      const cols = Math.ceil(gridCanvas.width / spacing) + 15;
      const offset = (progress * spacing * 10) % spacing;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          gridCtx.beginPath();
          gridCtx.arc(x * spacing - offset, y * spacing, 1, 0, Math.PI * 2);
          gridCtx.fill();
        }
      }
    };

    // === THREE SCENE ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.id = "letters-canvas";
    workSection.appendChild(renderer.domElement);

    const createPath = (y: number, amp: number) => {
      const points = Array.from({ length: 20 }, (_, i) => {
        const t = i / 20;
        return new THREE.Vector3(
          -25 + 50 * t,
          y + Math.sin(t * Math.PI) * -amp,
          (1 - Math.pow(Math.abs(t - 0.5) * 2, 2)) * -5
        );
      });
      const curve = new THREE.CatmullRomCurve3(points);
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(100)),
        new THREE.LineBasicMaterial({ color: 0x000 })
      );
      // @ts-ignore
      line.curve = curve;
      return line;
    };

    const paths = [
      createPath(10, 2),
      createPath(3.5, 1),
      createPath(-3.5, -1),
      createPath(-10, -2),
    ];
    paths.forEach((l) => scene.add(l));

    const textContainer = document.querySelector(".text-container")!;
    const letterPositions = new Map<
      HTMLElement,
      { current: { x: number; y: number }; target: { x: number; y: number } }
    >();

    paths.forEach((line, i) => {
      // @ts-ignore
      line.letterElements = Array.from({ length: 15 }, () => {
        const el = document.createElement("div");
        el.className = "letter";
        el.textContent = ["W", "O", "R", "K"][i];
        textContainer.appendChild(el);
        letterPositions.set(el, { current: { x: 0, y: 0 }, target: { x: 0, y: 0 } });
        return el;
      });
    });

    const multipliers = [0.8, 1, 0.7, 0.9];

    const updateTargets = (progress = 0) => {
      paths.forEach((line, lineIndex) => {
        // @ts-ignore
        line.letterElements.forEach((el: HTMLElement, i: number) => {
          // @ts-ignore
          const p = line.curve.getPoint((i / 14 + progress * multipliers[lineIndex]) % 1);
          const v = p.clone().project(camera);
          const pos = letterPositions.get(el)!;
          pos.target = {
            x: (v.x * 0.5 + 0.5) * window.innerWidth,
            y: (-v.y * 0.5 + 0.5) * window.innerHeight,
          };
        });
      });
    };

    const updateLetters = () => {
      letterPositions.forEach((pos, el) => {
        const dist = pos.target.x - pos.current.x;
        if (Math.abs(dist) > window.innerWidth * 0.7) {
          pos.current = { ...pos.target };
        } else {
          pos.current.x = lerp(pos.current.x, pos.target.x, 0.07);
          pos.current.y = lerp(pos.current.y, pos.target.y, 0.07);
          el.style.transform = `translate(-50%, -50%) translate3d(${pos.current.x}px, ${pos.current.y}px,0)`;
        }
      });
    };

    const updateCards = () => {
      const trigger = ScrollTrigger.getAll()[0];
      const targetX = -moveDistance * (trigger?.progress || 0);
      currentXPosition = lerp(currentXPosition, targetX, 0.07);
      gsap.set(cardsContainer, { x: currentXPosition });
    };

    const animate = () => {
      updateLetters();
      updateCards();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "+=700%",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        updateTargets(self.progress);
        drawGrid(self.progress);
      },
    });

    drawGrid(0);
    animate();
    updateTargets(0);

    window.addEventListener("resize", () => {
      resizeGrid();
      drawGrid(ScrollTrigger.getAll()[0]?.progress || 0);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      updateTargets(ScrollTrigger.getAll()[0]?.progress || 0);
    });
  }, []);

  return (
    <section className="work">
      <div className="text-container" />
      <div className="cards">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <div key={num} className="card">
            <div className="card-img">
              <img src={`/assets/img${num}.jpg`} alt={`Image ${num}`} />
            </div>
            <div className="card-copy">
              <p>
                {["Eclipse Horizon", "Vision Link", "Iron Bond", "Golden Case", "Virtual Space", "Smart Vision", "Desert Tunnel"][num - 1]}
              </p>
              <p>{["739284", "585912", "621478", "036251", "456732", "874355", "682943"][num - 1]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
