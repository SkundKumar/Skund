"use client";

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { Fugaz_One } from 'next/font/google';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: '400' });

const myTags = [
  'Wireframe', 'Drawing', 'UX Design',
  'Web Design', 'Photography', 'Framer',
  'Product Design', 'TypeScript', 'Next.js',
  'React', 'CSS', 'HTML',
];

const BouncingTags: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<(HTMLDivElement | null)[]>([]);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodiesRef = useRef<Matter.Body[]>([]);

  useEffect(() => {
    const { Engine, Runner, Bodies, World, Mouse, MouseConstraint, Events } = Matter;

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const engine = Engine.create();
    const world = engine.world;
    engine.world.gravity.y = 1;
    engineRef.current = engine;

    const runner = Runner.create();
    runnerRef.current = runner;

    const wallOptions = {
      isStatic: true,
      render: { visible: false },
    };

    const ground = Bodies.rectangle(width / 2, height + 30, width, 60, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -30, width, 60, wallOptions);
    const leftWall = Bodies.rectangle(-30, height / 2, 60, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height, wallOptions);
    World.add(world, [ground, ceiling, leftWall, rightWall]);

    const tagBodies: Matter.Body[] = [];
    tagsRef.current.forEach((el) => {
      if (!el) return;

      const body = Bodies.rectangle(
        Math.random() * width,
        Math.random() * (height / 2),
        el.offsetWidth,
        el.offsetHeight,
        {
          restitution: 0.8,
          friction: 0.1,
          chamfer: { radius: 20 },
        }
      );
      tagBodies.push(body);
    });
    World.add(world, tagBodies);
    bodiesRef.current = tagBodies;

    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);

    const syncElements = () => {
      bodiesRef.current.forEach((body, i) => {
        const el = tagsRef.current[i];
        if (!el) return;

        el.style.transform = `translate(
          ${body.position.x - el.offsetWidth / 2}px,
          ${body.position.y - el.offsetHeight / 2}px
        ) rotate(${body.angle}rad)`;
      });
    };

    Events.on(engine, 'afterUpdate', syncElements);
    Runner.run(runner, engine);

    return () => {
      if (runnerRef.current) {
        Runner.stop(runnerRef.current);
      }
      if (engineRef.current) {
        Events.off(engineRef.current, 'afterUpdate', syncElements);
        World.clear(engineRef.current.world, false);
        Engine.clear(engineRef.current);
      }
      if (mouse) {
        Mouse.clearSourceEvents(mouse);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`tags-container ${fugaz.className}`}>
      {myTags.map((text, index) => (
        <div
          key={index}
          className="tag-item"
          ref={(el) => (tagsRef.current[index] = el)}
        >
          {text}
        </div>
      ))}

      <style jsx>{`
        .tags-container {
          width: 30%;
          height: 600px;
          position: relative;
          overflow: hidden;
          background-image: radial-gradient(circle, black 1px, transparent 1px);
          background-size: 15px 15px;
          border: 2px solid black;
        }

        @media (max-width: 768px) {
          .tags-container {
            width: 100%;
            height: 400px;
            margin: 20px 0;
          }
        }

        .tag-item {
          position: absolute;
          top: 0;
          left: 0;
          font-family: Arial, sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #333;
          padding: 10px 20px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 1);
          border: 1px solid #ccc;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.005);
          will-change: transform;
          cursor: grab;
        }

        @media (max-width: 768px) {
          .tag-item {
            font-size: 14px;
            padding: 8px 16px;
          }
        }
        
        .tag-item:active {
            cursor: grabbing;
        }
      `}</style>
    </div>
  );
};

export default BouncingTags;
