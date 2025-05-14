import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseVx: number; // Store original velocity
  baseVy: number; // Store original velocity
}

interface Edge {
  from: Node;
  to: Node;
}

const NetworkGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes = useRef<Node[]>([]);
  const edges = useRef<Edge[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const animationFrameId = useRef<number>();
  const time = useRef(0);

  const initializeNodes = (width: number, height: number) => {
    const nodeCount = Math.floor((width * height) / 20000); // Increased node density
    nodes.current = [];

    for (let i = 0; i < nodeCount; i++) {
      const baseVx = (Math.random() - 0.5) * 0.5;
      const baseVy = (Math.random() - 0.5) * 0.5;
      
      nodes.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: baseVx,
        vy: baseVy,
        baseVx: baseVx, // Store original velocity for continuous motion
        baseVy: baseVy, // Store original velocity for continuous motion
        radius: Math.random() * 2 + 1,
      });
    }
  };

  const createEdges = () => {
    edges.current = [];
    const maxDistance = 200; // Increased max distance to create more connections

    for (let i = 0; i < nodes.current.length; i++) {
      for (let j = i + 1; j < nodes.current.length; j++) {
        const dx = nodes.current[i].x - nodes.current[j].x;
        const dy = nodes.current[i].y - nodes.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          edges.current.push({
            from: nodes.current[i],
            to: nodes.current[j],
          });
        }
      }
    }
  };

  const updateNodes = (width: number, height: number) => {
    // Increment time for continuous animation
    time.current += 0.01;
    
    const mouseRadius = isHovering.current ? 150 : 0; // Only apply mouse effects when hovering
    const flowStrength = 0.2; // Strength of the continuous flow

    nodes.current.forEach((node) => {
      // Apply continuous motion with sine wave variation
      const flowX = Math.sin(time.current + node.y * 0.01) * flowStrength;
      const flowY = Math.cos(time.current + node.x * 0.01) * flowStrength;
      
      // Reset velocities to base + flow
      node.vx = node.baseVx + flowX;
      node.vy = node.baseVy + flowY;
      
      // Apply mouse repulsion when hovering
      if (isHovering.current) {
        const dx = node.x - mousePos.current.x;
        const dy = node.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          node.vx += (dx / distance) * force * 1.2; // Increased effect
          node.vy += (dy / distance) * force * 1.2; // Increased effect
        }
      }

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off walls
      if (node.x < 0 || node.x > width) {
        node.vx *= -0.8;
        node.baseVx *= -1; // Flip base velocity when hitting walls
      }
      if (node.y < 0 || node.y > height) {
        node.vy *= -0.8;
        node.baseVy *= -1; // Flip base velocity when hitting walls
      }

      // Apply friction
      node.vx *= 0.99;
      node.vy *= 0.99;
    });
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw edges with thicker lines and darker blue color
    edges.current.forEach((edge) => {
      const dx = edge.from.x - edge.to.x;
      const dy = edge.from.y - edge.to.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Calculate opacity based on distance and time
      const maxDistance = 200;
      const opacity = isHovering.current 
        ? 0.6 - (distance / maxDistance) * 0.3 // Enhanced when hovering
        : 0.4 - (distance / maxDistance) * 0.15;
      
      ctx.strokeStyle = `rgba(0, 51, 153, ${opacity})`; // Darker blue color
      ctx.lineWidth = isHovering.current ? 1.8 : 1.5; // Thicker lines
      
      ctx.beginPath();
      ctx.moveTo(edge.from.x, edge.from.y);
      ctx.lineTo(edge.to.x, edge.to.y);
      ctx.stroke();
    });

    // Draw nodes with darker blue color
    nodes.current.forEach((node) => {
      const pulse = Math.sin(time.current * 2 + node.x * 0.01 + node.y * 0.01) * 0.2 + 0.8;
      const radius = isHovering.current ? node.radius * (pulse + 0.5) : node.radius * pulse;
      
      ctx.fillStyle = isHovering.current 
        ? `rgba(0, 51, 153, ${0.6 + pulse * 0.2})` 
        : `rgba(0, 51, 153, ${0.4 + pulse * 0.1})`;
        
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    updateNodes(canvas.width, canvas.height);
    createEdges();
    draw();

    animationFrameId.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeNodes(canvas.width, canvas.height);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseEnter = () => {
    isHovering.current = true;
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();
    animate();

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "transparent" }}
    />
  );
};

export default NetworkGraph;
