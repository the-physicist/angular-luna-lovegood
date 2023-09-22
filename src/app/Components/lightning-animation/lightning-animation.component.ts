import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-lightning-animation',
  template: '<canvas class="myCanvas"></canvas>',
  styleUrls: ['./lightning-animation.component.css'],
})
export class LightningAnimationComponent implements OnInit {
  private readonly width: number = 1300;
  private readonly height: number = 600;
  private readonly maxLightningPaths: number = 24;
  private readonly maxLightningThickness: number = 10;
  private readonly startingDistance: number = 30;
  private readonly maxBranches: number = 5;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.createCanvasAndLightning();
  }

  private createCanvasAndLightning() {
    const canvas = this.renderer.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.className = 'myCanvas';
    this.renderer.appendChild(this.el.nativeElement, canvas);
    const ctx = canvas.getContext('2d');
    const time = this.makeLightning(
      ctx,
      this.getRandomInt(this.width),
      this.getRandomInt(this.height / 3),
      0
    );
    canvas.style.animationName = 'flash';
    canvas.style.animationDuration = time + 'ms';
    setTimeout(() => {
      canvas.style.animationName = 'fadeOut';
    }, time);
    setTimeout(() => {
      canvas.remove();
      setTimeout(() => {
        this.createCanvasAndLightning();
      }, 4000);
    }, time * 2);
  }

  private makeLightning(
    ctx: CanvasRenderingContext2D,
    startingX: number,
    startingY: number,
    branches: number
  ): number {
    ctx.beginPath();
    const amntOfPaths = this.getRandomInt(this.maxLightningPaths);
    let lightningThickness = this.maxLightningThickness;
    let distance = this.startingDistance;
    let timeout = 80;
    let speed = timeout;
    let totalTime = 0;
    for (let i = 0; i < amntOfPaths; i++) {
      ctx.strokeStyle = `rgb(255,255,255)`;
      ctx.lineWidth = this.getRandomInt(lightningThickness);
      lightningThickness /= 1.2;
      setTimeout(() => {
        ctx.moveTo(startingX, startingY);
        let endingX = this.getRandomInt(distance) * this.negOrPos() + startingX;
        let endingY = startingY + this.getRandomInt(distance * 2);
        distance /= 1.1;
        ctx.lineTo(endingX, endingY);
        startingX = endingX;
        startingY = endingY;
        ctx.stroke();
        if (
          branches < this.maxBranches &&
          this.getRandomInt(this.maxLightningPaths / 6) == 1
        ) {
          let time = this.makeLightning(
            ctx,
            startingX,
            startingY,
            branches + 1
          );
          totalTime += time;
        }
      }, timeout);
      speed /= 1.5;
      timeout += speed;
    }
    return timeout + totalTime;
  }

  private negOrPos(): number {
    return Math.round(Math.random()) == 0 ? -1 : 1;
  }

  private getRandomInt(max: number): number {
    return Math.ceil(Math.random() * max);
  }
}
