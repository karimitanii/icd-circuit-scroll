import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
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
  const animationFrameId = useRef<number>();

  const initializeNodes = (width: number, height: number) => {
    const nodeCount = Math.floor((width * height) / 25000); // Adjust density based on screen size
    nodes.current = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }
  };

  const createEdges = () => {
    edges.current = [];
    const maxDistance = 150;

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
    const mouseRadius = 100;

    nodes.current.forEach((node) => {
      // Apply mouse repulsion
      const dx = node.x - mousePos.current.x;
      const dy = node.y - mousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouseRadius) {
        const force = (mouseRadius - distance) / mouseRadius;
        node.vx += (dx / distance) * force * 0.5;
        node.vy += (dy / distance) * force * 0.5;
      }

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off walls
      if (node.x < 0 || node.x > width) node.vx *= -0.8;
      if (node.y < 0 || node.y > height) node.vy *= -0.8;

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

    // Draw edges
    ctx.strokeStyle = "rgba(0, 71, 171, 0.25)";
    ctx.lineWidth = 1;
    edges.current.forEach((edge) => {
      ctx.beginPath();
      ctx.moveTo(edge.from.x, edge.from.y);
      ctx.lineTo(edge.to.x, edge.to.y);
      ctx.stroke();
    });

    // Draw nodes
    ctx.fillStyle = "rgba(0, 71, 171, 0.4)";
    nodes.current.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
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
