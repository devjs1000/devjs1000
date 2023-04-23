import p5Types from 'p5';
import { BACK, FRONT, LEFT, RIGHT, bluePrints, directions } from './bluePrints';



function Pokemon(p5: p5Types, { x, y, imageCount, horizontalDirection, verticalDirection }) {
    this.activePokemon = bluePrints[imageCount];
    this.imageCount = imageCount || 0
    this.name = "Dog";
    this.description = "A dog.";
    this.image = p5.loadImage(this.activePokemon.url);
    this.land = y || 100;
    this.x = x || 100;
    this.y = p5.height - this.land;
    this.width = 100;
    this.height = 100;
    this.speed = 10;
    this.horizontalDirection = horizontalDirection || 1;
    this.verticalDirection = verticalDirection || 1;
    this.direction = directions[p5.floor(p5.random(0, 4))];
    this.isMoving = false;
    this.isJumping = false;
    this.totalFrames = 4;
    this.currentFrame = 0;
    // this.frameWidth = this.activePokemon.frameWitdth;
    // this.frameHeight = this.activePokemon.frameHeight;
    this.jumpHeight = 20;
    this.gravity = 6;
    this.frameLocation = { x: 0, y: 0 }
    this.jumpHeightCounter = 0;

    this.updateFrame = function () {
        this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
    }
    this.isAnimating = true;
    this.draw = () => {
        p5.fill(255)
        let shift = this.activePokemon[this.direction];
        if (this.direction == LEFT && this.horizontalDirection == -1) {
            p5.image(this.image, this.x, this.y, this.width, this.height, this.currentFrame * shift.frameWidth, shift.frame + shift.shiftY, shift.frameWidth, shift.frameHeight);
        } else if (this.direction == RIGHT && this.horizontalDirection == 1) {
            p5.image(this.image, this.x, this.y, this.width, this.height, this.currentFrame * shift.frameWidth, shift.frame + shift.shiftY, shift.frameWidth, shift.frameHeight);
        } else if (this.direction == BACK && this.verticalDirection == -1) {
            p5.image(this.image, this.x, this.y, this.width, this.height, this.currentFrame * shift.frameWidth, shift.frame + shift.shiftY, shift.frameWidth, shift.frameHeight);
        } else if (this.direction == FRONT && this.verticalDirection == 1) {
            p5.image(this.image, this.x, this.y, this.width, this.height, this.currentFrame * shift.frameWidth, shift.frame + shift.shiftY, shift.frameWidth, shift.frameHeight);
        }

        if (this.isAnimating) {
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
        }

        const touched = p5.mouseX > this.x && p5.mouseX < this.x + this.width && p5.mouseY > this.y && p5.mouseY < this.y + this.height;
        let prev: any = false
        if (touched) {
            p5.cursor(p5.HAND);
            p5.textSize(16)
            p5.rectMode(p5.CENTER);
            p5.fill(255, 255, 255)
            p5.rect(this.x + 30, this.y - 20, 100, 25)
            p5.fill(0, 0, 0)
            p5.text('hi there', this.x, this.y - 10)
            this.isMoving = false;
        } else {
            p5.cursor(p5.ARROW);
            this.isMoving = true;
        }

        if (p5.mouseIsPressed && touched) {
            this.direction = FRONT
            this.verticalDirection = 1;
        } else {
            this.move()
        }

    }


    this.updateDirection = () => {
        let isLeft = this.direction == LEFT
        let isRight = this.direction == RIGHT
        let isUp = this.direction == BACK
        let isDown = this.direction == FRONT
        if (isLeft || isRight) {
            if (this.x >= p5.width - this.width) {
                this.horizontalDirection = -1;
                this.direction = LEFT
            } else if (this.x <= 0) {
                this.horizontalDirection = 1;
                this.direction = RIGHT
            }
        } else if (isUp || isDown) {
            if (this.y >= p5.height - this.height) {
                this.verticalDirection = -1;
                this.direction = BACK
            } else if (this.y <= this.height) {
                this.verticalDirection = 1;
                this.direction = FRONT
            }
        }

    }


    this.move = () => {
        if (this.isMoving) {
            let isLeft = this.direction == LEFT
            let isRight = this.direction == RIGHT
            let isUp = this.direction == BACK
            let isDown = this.direction == FRONT
            if (isLeft || isRight) {
                this.x += this.speed * this.horizontalDirection;
            } else if (isUp || isDown) {
                this.y += this.speed * this.verticalDirection;
            }
            this.updateDirection();
        }
        this.isMoving = true;
    }


}

export default Pokemon;