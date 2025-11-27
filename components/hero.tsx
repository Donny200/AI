"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";

interface Bar {
  height: number;
  color: string;
  width: number;
  opacity: number;
  y: number;
  isGreen: boolean;
}

export default function Hero() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    let animationId: number;
    let scrollOffset = 0;
    const bars: Bar[] = [];

    const circleRadius = Math.min(canvas.width, canvas.height) * 0.18;
    const circleX = canvas.width * 0.7;
    const circleY = canvas.height / 2;

    const barWidth = 6;
    const spacing = 5;
    const totalBarsNeeded = Math.ceil(canvas.width / (barWidth + spacing)) + 80;

    let trend = 1;
    let trendStrength = 0.3;
    let trendDuration = 0;
    let maxTrendDuration = 12 + Math.random() * 15;

    // Инициализация баров
    for (let i = 0; i < totalBarsNeeded; i++) {
      const baseHeight = canvas.height * (0.04 + Math.random() * 0.12);

      if (trendDuration > maxTrendDuration) {
        trend = -trend;
        trendStrength = Math.random() * 0.5 + 0.2;
        trendDuration = 0;
        maxTrendDuration = 8 + Math.random() * 18;
      }

      const heightMultiplier = trend === 1 ? 1 + trendStrength * 0.3 : 1 - trendStrength * 0.2;
      const newHeight = Math.max(
        canvas.height * 0.03,
        Math.min(canvas.height * 0.18, baseHeight * heightMultiplier)
      );

      const isGreen = trend === 1 ? Math.random() < 0.65 : Math.random() < 0.35;

      let newY: number;
      if (i === 0) {
        newY = circleY - newHeight / 2;
      } else {
        const prevBar = bars[i - 1];
        newY = prevBar.isGreen ? prevBar.y + prevBar.height : prevBar.y - newHeight;
      }

      const verticalBounds = canvas.height * 0.25;
      newY = Math.max(circleY - verticalBounds, Math.min(circleY + verticalBounds, newY));

      if (Math.random() < 0.2) {
        newY += (Math.random() - 0.5) * canvas.height * 0.06;
      }

      bars.push({
        height: newHeight,
        color: isGreen ? "#00ff00" : "#ff0000",
        width: barWidth,
        opacity: 0.8 + Math.random() * 0.2,
        y: newY,
        isGreen,
      });

      trendDuration++;
    }

    const drawAnimatedBars = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      scrollOffset += 0.35;

      if (scrollOffset >= barWidth + spacing) {
        scrollOffset = 0;
        const firstBar = bars.shift();
        if (firstBar && bars.length > 0) {
          const lastBar = bars[bars.length - 1];

          if (Math.random() < 0.015) {
            trend = -trend;
            trendStrength = Math.random() * 0.5 + 0.2;
            trendDuration = 0;
            maxTrendDuration = 8 + Math.random() * 18;
          }

          const baseHeight = canvas.height * (0.04 + Math.random() * 0.12);
          const heightMultiplier = trend === 1 ? 1 + trendStrength * 0.2 : 1 - trendStrength * 0.15;
          const newHeight = Math.max(
            canvas.height * 0.03,
            Math.min(canvas.height * 0.18, baseHeight * heightMultiplier)
          );

          const isGreen = trend === 1 ? Math.random() < 0.65 : Math.random() < 0.35;

          let newY = lastBar.isGreen ? lastBar.y + lastBar.height : lastBar.y - newHeight;
          const verticalBounds = canvas.height * 0.25;
          newY = Math.max(circleY - verticalBounds, Math.min(circleY + verticalBounds, newY));
          if (Math.random() < 0.2) newY += (Math.random() - 0.5) * canvas.height * 0.06;

          firstBar.height = newHeight;
          firstBar.color = isGreen ? "#00ff00" : "#ff0000";
          firstBar.y = newY;
          firstBar.isGreen = isGreen;
          bars.push(firstBar);
          trendDuration++;
        }
      }

      // Фон (размытые бары)
      ctx.save();
      ctx.globalAlpha = 0.2;
      ctx.filter = "blur(5px)";

      bars.forEach((bar, index) => {
        const x = index * (barWidth + spacing) - scrollOffset;
        if (x > -barWidth && x < canvas.width) {
          const gradient = ctx.createLinearGradient(x, bar.y, x, bar.y + bar.height);
          if (bar.color === "#00ff00") {
            gradient.addColorStop(0, "rgba(0, 255, 0, 0.7)");
            gradient.addColorStop(1, "rgba(0, 255, 0, 0.2)");
          } else {
            gradient.addColorStop(0, "rgba(255, 0, 0, 0.7)");
            gradient.addColorStop(1, "rgba(255, 0, 0, 0.2)");
          }
          ctx.fillStyle = gradient;
          ctx.globalAlpha = bar.opacity * 0.2;
          ctx.fillRect(x, bar.y, bar.width, bar.height);
        }
      });
      ctx.restore();

      // Чёткие бары внутри круга
      ctx.save();
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
      ctx.clip();
      ctx.filter = "none";
      ctx.globalAlpha = 1;

      bars.forEach((bar, index) => {
        const x = index * (barWidth + spacing) - scrollOffset;
        if (x > circleX - circleRadius - barWidth && x < circleX + circleRadius) {
          const gradient = ctx.createLinearGradient(x, bar.y, x, bar.y + bar.height);
          if (bar.color === "#00ff00") {
            gradient.addColorStop(0, "#00ff00");
            gradient.addColorStop(0.8, "rgba(0, 255, 0, 0.6)");
            gradient.addColorStop(1, "rgba(0, 255, 0, 0.2)");
          } else {
            gradient.addColorStop(0, "#ff0000");
            gradient.addColorStop(0.8, "rgba(255, 0, 0, 0.6)");
            gradient.addColorStop(1, "rgba(255, 0, 0, 0.2)");
          }
          ctx.fillStyle = gradient;
          ctx.globalAlpha = bar.opacity;
          ctx.fillRect(x, bar.y, bar.width, bar.height);

          // 3D-подсветка
          if (bar.color === "#00ff00") {
            ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
          } else {
            ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
          }
          ctx.fillRect(x, bar.y, bar.width * 0.4, bar.height);
        }
      });
      ctx.restore();

      // Обводка круга
      ctx.save();

      // Внешнее свечение
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleRadius + 6, 0, Math.PI * 2);
      const outerGlow = ctx.createRadialGradient(circleX, circleY, circleRadius, circleX, circleY, circleRadius + 12);
      outerGlow.addColorStop(0, "rgba(0, 255, 0, 0.3)");
      outerGlow.addColorStop(1, "rgba(0, 255, 0, 0)");
      ctx.strokeStyle = outerGlow;
      ctx.lineWidth = 8;
      ctx.stroke();

      // Основной круг
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "#00ff00";
      ctx.lineWidth = 4;
      ctx.stroke();

      // Внутренний блик
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleRadius - 2, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Текст AI 500
      ctx.font = `bold ${circleRadius * 0.18}px 'Geist Mono', monospace`;
      ctx.fillStyle = "#00ff00";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Фон текста
      ctx.fillStyle = "rgba(10, 10, 10, 0.85)";
      ctx.fillRect(
        circleX - circleRadius * 0.3,
        circleY - circleRadius * 0.1,
        circleRadius * 0.6,
        circleRadius * 0.2
      );

      // Основной текст
      ctx.fillStyle = "#00ff00";
      ctx.fillText("AI", circleX, circleY - circleRadius * 0.03);
      ctx.fillText("500", circleX, circleY + circleRadius * 0.03);

      // Свечение текста
      ctx.shadowColor = "rgba(0, 255, 0, 0.5)";
      ctx.shadowBlur = 8;
      ctx.fillText("AI", circleX, circleY - circleRadius * 0.03);
      ctx.fillText("500", circleX, circleY + circleRadius * 0.03);
      ctx.shadowBlur = 0;

      ctx.restore();

      animationId = requestAnimationFrame(drawAnimatedBars);
    };

    animationId = requestAnimationFrame(drawAnimatedBars);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const scrollToNextSection = () => {
    const roadmapSection = document.getElementById("roadmap-section");
    if (roadmapSection) roadmapSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative h-screen w-full flex items-center overflow-hidden bg-gradient-to-b from-background to-background via-secondary/20"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-20 w-full h-full flex">
        {/* Контент слева */}
        <div className="w-1/2 flex flex-col justify-center px-12 animate-slide-in-left">
          <div className="mb-8">
            <div className="inline-block mb-6 px-4 py-2 border border-primary/50 rounded-full text-sm text-primary bg-primary/5">
              {t("welcomeToFuture")}
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6 leading-tight">
            <span className="text-primary">{t("createTomorrow")}</span>
            <br />
            <span className="text-muted-foreground">{t("withAI")}</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
            {t("heroDescription")}
          </p>

          <div className="flex gap-4 mb-12">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
              {t("startBuilding")}
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors">
              {t("learnMore")}
            </button>
          </div>

          <div className="flex gap-8 text-sm">
            <div>
              <div className="font-semibold text-primary">{t("prizeAmount")}</div>
              <div className="text-muted-foreground">{t("prizePool")}</div>
            </div>
            <div>
              <div className="font-semibold text-primary">{t("teamsCount")}</div>
              <div className="text-muted-foreground">{t("expectedTeams")}</div>
            </div>
            <div>
              <div className="font-semibold text-primary">{t("eventMonth")}</div>
              <div className="text-muted-foreground">{t("eventDate")}</div>
            </div>
          </div>
        </div>

        <div className="w-1/2" />
      </div>

      {/* Стрелка вниз */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-primary hover:text-primary/70 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}