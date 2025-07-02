document.addEventListener('DOMContentLoaded', function() {
    // 获取所有需要的DOM元素
    const container = document.getElementById('scenesContainer');
    const startButton = document.getElementById('startButton');
    const scene1 = document.getElementById('scene1');
    const scene2 = document.getElementById('scene2');
    const scene3 = document.getElementById('scene3');
    const scene4 = document.getElementById('scene4');
    const scene5 = document.getElementById('scene5');
    const scene6 = document.getElementById('scene6');
    const centerImage = document.getElementById('centerImage');
    const animatedText = document.getElementById('animatedText');
    const silkImage = document.getElementById('silkImage');
    const catIcon = document.getElementById('catIcon');
    const catDialog = document.getElementById('catDialog');
    const dialogContent = document.getElementById('dialogContent');
    const nextBtnContainer = document.getElementById('nextSceneBtnContainer');
    const nextBtn = document.getElementById('nextSceneBtn');
    const backBtns = document.querySelectorAll('.back-btn');
    const goldenFrame = document.querySelector('.golden-frame');

    // 初始状态 - 锁定第一幕
    container.style.overflow = 'hidden';
    let isAnimating = false;

    // 1. 开始按钮点击处理
    startButton.addEventListener('click', function() {
        if (isAnimating) return;
        isAnimating = true;
        
        scene2.style.display = 'flex';
        container.style.overflow = 'auto';
        void scene2.offsetHeight;
        
        setTimeout(() => {
            scene2.scrollIntoView({ behavior: 'smooth', block: 'start' });
            scene2.style.transition = 'opacity 0.5s ease';
            scene2.style.opacity = '0';
            setTimeout(() => {
                scene2.style.opacity = '1';
                isAnimating = false;
            }, 50);
        }, 100);
        
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = 'scale(1)', 200);
    });

    // 2. 居中图片点击动画
    if (centerImage && animatedText) {
        const text = "锣鼓铿锵，戏韵流芳";
        
        centerImage.addEventListener('click', function() {
            if (isAnimating || animatedText.classList.contains('show')) return;
            isAnimating = true;
            
            animatedText.classList.add('show');
            animatedText.innerHTML = '';
            
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    const charSpan = document.createElement('span');
                    charSpan.textContent = text[i];
                    animatedText.appendChild(charSpan);
                    
                    setTimeout(() => {
                        charSpan.style.opacity = '1';
                        charSpan.style.transform = 'translateY(0)';
                        charSpan.animate([
                            { transform: 'translateY(-10px)', opacity: 0 },
                            { transform: 'translateY(5px)', opacity: 1 },
                            { transform: 'translateY(0)', opacity: 1 }
                        ], { duration: 500, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' });
                    }, 100);
                }, i * 200);
            }
            
            setTimeout(() => {
                if (catIcon) {
                    catIcon.style.display = 'block';
                    catIcon.style.opacity = '0';
                    
                    setTimeout(() => {
                        catIcon.style.transition = 'opacity 1s ease, transform 0.5s ease';
                        catIcon.style.opacity = '1';
                        catIcon.animate([
                            { transform: 'translateY(0) scale(1)' },
                            { transform: 'translateY(-20px) scale(1.1)' },
                            { transform: 'translateY(0) scale(1)' }
                        ], { duration: 500, iterations: 1 });

                        if (catDialog) {
                            setTimeout(() => {
                                catDialog.style.display = 'block';
                                catDialog.style.opacity = '0';
                                
                                setTimeout(() => {
                                    catDialog.style.transition = 'opacity 0.5s ease';
                                    catDialog.style.opacity = '1';
                                    
                                    catDialog.addEventListener('click', function() {
                                        if (dialogContent) {
                                            dialogContent.textContent = "试着擦除下面的灰色方块吧";
                                        }
                                    });
                                }, 100);
                            }, 500);
                        }
                    }, 100);
                }
                
                setTimeout(() => {
                    if (silkImage) {
                        silkImage.style.display = 'block';
                        silkImage.style.opacity = '0';
                        
                        setTimeout(() => {
                            silkImage.style.transition = 'opacity 1s ease';
                            silkImage.style.opacity = '0.9';
                            initEraseEffect();
                            
                            // 所有第二幕动画完成后显示按钮
                            setTimeout(showNextButton, 1000);
                        }, 100);
                    }
                }, 3000);
                
                isAnimating = false;
            }, text.length * 200 + 500);
        });
    }

    // 显示"进入下一幕"按钮
    function showNextButton() {
        if (nextBtnContainer && nextBtn) {
            nextBtnContainer.style.display = 'block';
            nextBtnContainer.style.opacity = '0';
            nextBtnContainer.style.transition = 'opacity 1s ease';
            
            setTimeout(() => {
                nextBtnContainer.style.opacity = '1';
                
                nextBtn.addEventListener('click', function() {
                    if (isAnimating || !scene3) return;
                    isAnimating = true;
                    
                    scene3.style.display = 'flex';
                    void scene3.offsetHeight;
                    scene3.style.transition = 'opacity 0.5s ease';
                    scene3.style.opacity = '0';
                    
                    setTimeout(() => {
                        scene3.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        
                        // 第三幕动画
                        const catPerson = document.querySelector('.cat-person-container');
if (catPerson) {
    catPerson.style.opacity = '0';
    catPerson.style.transition = 'opacity 0.8s ease';
    
    // 定义对话框和内容元素
    const catDialogBubble = document.querySelector('.cat-dialog-bubble');
    const catDialogContent = document.querySelector('.dialog-content1');
    
    // 确保元素存在再继续
    if (catDialogBubble && catDialogContent) {
        // 先隐藏对话框
        catDialogBubble.style.opacity = '0';
        catDialogContent.textContent = '';
        
        // 显示猫角色
        setTimeout(() => {
            catPerson.style.opacity = '1';
            catPerson.style.cursor = 'pointer';
            
            // 为猫角色添加点击事件
            catPerson.addEventListener('click', function() {
                if (catDialogBubble.style.opacity === '1') {
                    // 隐藏对话框
                    catDialogBubble.style.opacity = '0';
                } else {
                    // 显示对话框
                    catDialogBubble.style.opacity = '1';
                    catDialogBubble.style.transition = 'opacity 0.5s ease';
                    
                    // 如果内容为空，则设置内容
                    if (!catDialogContent.textContent.trim()) {
                        catDialogContent.textContent = "试试点下面三个图片试试";
                        
                        // 添加猫角色的动画效果
                        catPerson.animate([
                            { transform: 'translateY(0) scale(1)' },
                            { transform: 'translateY(-5px) scale(1.05)' },
                            { transform: 'translateY(0) scale(1)' }
                        ], { duration: 300 });
                    }
                }
            });
        }, 300);
    }
}
                        
                        // 第三幕元素点击事件
                        const greenFace = document.querySelector('.green-face-container');
                        const purpleImage = document.querySelector('.purple-image-container');
                        const pinkFace = document.querySelector('.pink-face-container');
                        const earthImage = document.getElementById('earthImage');
                        const pipaContainer = document.querySelector('.pipa-container');
                        const amberImage = document.getElementById('amberImage');

                        if (greenFace && purpleImage) {
                            greenFace.addEventListener('click', function() {
                                const isShowing = purpleImage.style.opacity === '1';
                                purpleImage.style.opacity = isShowing ? '0' : '1';
                                purpleImage.style.transition = 'opacity 0.5s ease';
                                
                                const faceText = document.querySelector('.face-text');
                                if (faceText) faceText.style.opacity = isShowing ? '0' : '1';
                            });
                        }

                        if (pinkFace && earthImage) {
                            pinkFace.addEventListener('click', function() {
                                if (earthImage.style.display === 'none') {
                                    earthImage.style.display = 'block';
                                    earthImage.style.opacity = '0';
                                    setTimeout(() => earthImage.style.opacity = '1', 10);
                                } else {
                                    earthImage.style.opacity = '0';
                                    setTimeout(() => earthImage.style.display = 'none', 300);
                                }
                            });
                        }

                        if (pipaContainer && amberImage) {
                            pipaContainer.addEventListener('click', function() {
                                if (amberImage.style.display === 'none') {
                                    amberImage.style.display = 'block';
                                    amberImage.style.opacity = '0';
                                    setTimeout(() => amberImage.style.opacity = '1', 10);
                                } else {
                                    amberImage.style.opacity = '0';
                                    setTimeout(() => amberImage.style.display = 'none', 300);
                                }
                            });
                        }

                        // 第四幕跳转（新增金色边框和3D轮播）
                        if (purpleImage && scene4) {
                            purpleImage.addEventListener('click', function() {
                                if (isAnimating || this.style.opacity !== '1') return;
                                isAnimating = true;
                                
                                setTimeout(() => {
                                    scene4.style.display = 'flex';
                                    scene4.scrollIntoView({ behavior: 'smooth' });
                                    
                                    // 金色边框动画
                                    if (goldenFrame) {
                                        goldenFrame.style.opacity = '0';
                                        goldenFrame.style.transform = 'translateX(-50%) translateY(-30px)';
                                        goldenFrame.style.transition = 'none';
                                        
                                        setTimeout(() => {
                                            goldenFrame.style.transition = 'opacity 1s ease, transform 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                                            goldenFrame.style.opacity = '1';
                                            goldenFrame.style.transform = 'translateX(-50%) translateY(0)';
                                            goldenFrame.classList.add('fade-in');

                                            // 初始化3D轮播
                                            initFaceCarousel();
                                            
                                            goldenFrame.addEventListener('click', function handleClick() {
                                                if (isAnimating) return;
                                                isAnimating = true;
                                                
                                                if (!this.classList.contains('active')) {
                                                    this.classList.add('active');
                                                    
                                                    const frameText = this.querySelector('.frame-text');
                                                    const slideHint = this.querySelector('.slide-hint');
                                                    const carouselContainer = this.querySelector('.carousel-container');
                                                    
                                                    // 显示文字和提示
                                                    frameText.style.opacity = '1';
                                                    slideHint.style.opacity = '1';
                                                    slideHint.style.transform = 'translateY(0)';
                                                    
                                                    setTimeout(() => {
                                                        carouselContainer.style.opacity = '1';
                                                        
                                                        // 初始化3D轮播
                                                        initFaceCarousel();

                                                        const orangeImage = document.querySelector('.orange-image-container');
                                                        setTimeout(() => {
                                                            orangeImage.style.display = 'flex';
                                                            setTimeout(() => {
                                                                orangeImage.style.opacity = '1';
                                                                const kickHere = orangeImage.querySelector('.kick-here');
                                                                setTimeout(() => {
                                                                    kickHere.style.opacity = '1';

                                                                    kickHere.addEventListener('click', function() {
                                                                        this.style.opacity = '0';
                                                                        const culturalText = orangeImage.querySelector('.cultural-text');
                                                                        culturalText.style.opacity = '1';
                                                                    })
                                                                    isAnimating = false;
                                                                }, 300); 
                                                            }, 50);
                                                        }, 1000);
                                                    }, 800);
                                                }
                                                
                                                this.style.transform = 'translateX(-50%) scale(0.95)';
                                                setTimeout(() => {
                                                    this.style.transform = 'translateX(-50%) scale(1)';
                                                }, 200);
                                            });
                                        }, 50);
                                    }
                                    
                                    isAnimating = false;
                                }, 500);
                            });
                        }

                        // 第五幕跳转 - 初始化拖拽功能
                        if (earthImage && scene5) {
                            earthImage.addEventListener('click', function() {
                                if (isAnimating || this.style.opacity !== '1') return;
                                isAnimating = true;
                                setTimeout(() => {
                                    scene5.style.display = 'flex';
                                    scene5.scrollIntoView({ behavior: 'smooth' });
                                    
                                    // 初始化拖拽功能（整合后的拖放功能）
                                    initRectangleDrag();
                                    
                                    isAnimating = false;
                                }, 500);
                            });
                        }

                        // 第六幕跳转
                        if (amberImage && scene6) {
                            amberImage.addEventListener('click', function() {
                                if (isAnimating || this.style.opacity !== '1') return;
                                isAnimating = true;
                                setTimeout(() => {
                                    scene6.style.display = 'flex';
                                    scene6.scrollIntoView({ behavior: 'smooth' });
                                    isAnimating = false;
                                }, 500);
                            });
                        }

                        // 返回按钮
                        backBtns.forEach(btn => {
                            btn.addEventListener('click', function() {
                                const currentScene = this.closest('.scene');
                                
                                // 重置金色边框
                                if (goldenFrame) {
                                    goldenFrame.classList.remove('fade-in');
                                    goldenFrame.style.opacity = '0';
                                }
                                
                                currentScene.style.display = 'none';
                                scene3.scrollIntoView({ behavior: 'smooth' });
                            });
                        });

                        setTimeout(() => {
                            scene3.style.opacity = '1';
                            isAnimating = false;
                        }, 50);
                    }, 100);
                    
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => this.style.transform = 'scale(1)', 200);
                });
            }, 100);
        }
    }

    // 3. 擦除效果实现
    function initEraseEffect() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const silkContainer = document.querySelector('.silk-image-container');
        const grayMask = document.querySelector('.gray-mask');
        
        if (!silkContainer || !grayMask) return;
        
        canvas.width = 420;
        canvas.height = 500;
        silkContainer.style.width = '420px';
        silkContainer.style.height = '500px';
        
        ctx.fillStyle = 'rgba(128, 128, 128, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        grayMask.style.webkitMaskImage = `url(${canvas.toDataURL()})`;
        grayMask.style.maskImage = `url(${canvas.toDataURL()})`;
        
        let isDrawing = false;
        const eraseRadius = 30;
        
        silkContainer.addEventListener('mousedown', startErasing);
        document.addEventListener('mouseup', stopErasing);
        silkContainer.addEventListener('mousemove', erase);
        silkContainer.addEventListener('touchstart', handleTouchStart);
        silkContainer.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', stopErasing);
        
        function startErasing(e) {
            isDrawing = true;
            erase(e);
        }
        
        function stopErasing() {
            isDrawing = false;
        }
        
        function erase(e) {
            if (!isDrawing) return;
            
            const rect = silkContainer.getBoundingClientRect();
            const x = (e.clientX || e.touches[0].clientX) - rect.left;
            const y = (e.clientY || e.touches[0].clientY) - rect.top;
            
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(x, y, eraseRadius, 0, Math.PI * 2);
            ctx.fill();
            
            grayMask.style.webkitMaskImage = `url(${canvas.toDataURL()})`;
            grayMask.style.maskImage = `url(${canvas.toDataURL()})`;
        }
        
        function handleTouchStart(e) {
            e.preventDefault();
            isDrawing = true;
            erase(e);
        }
        
        function handleTouchMove(e) {
            e.preventDefault();
            erase(e);
        }
    }

    // 3D轮播初始化函数
    function initFaceCarousel() {
        const carousel = document.querySelector('.carousel');
        const faces = document.querySelectorAll('.carousel-face');
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        
        if (!carousel || faces.length === 0) return;
        
        let currentIndex = 0;
        const angle = 360 / faces.length;
        
        function updateCarousel() {
            carousel.style.transform = `rotateY(${currentIndex * -angle}deg)`;
        }
        
        function nextFace() {
            currentIndex = (currentIndex + 1) % faces.length;
            updateCarousel();
        }
        
        function prevFace() {
            currentIndex = (currentIndex - 1 + faces.length) % faces.length;
            updateCarousel();
        }
        
        if (nextBtn) nextBtn.addEventListener('click', nextFace);
        if (prevBtn) prevBtn.addEventListener('click', prevFace);
        
        // 键盘控制
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') nextFace();
            if (e.key === 'ArrowLeft') prevFace();
        });
        
        // 初始化位置
        updateCarousel();
    }

    // 5. 拖拽功能实现
    function initRectangleDrag() {
        // 获取所有可拖动长方形和目标区域
        const rectangles = document.querySelectorAll('.draggable-rectangle');
        const targets = document.querySelectorAll('.drop-target');
        
        // 当前被拖动的长方形
        let draggedRectangle = null;
        let initialX, initialY, currentX, currentY;
        
        // 为每个长方形添加拖动事件
        rectangles.forEach(rectangle => {
            rectangle.addEventListener('mousedown', startDrag);
            rectangle.addEventListener('touchstart', startDrag, { passive: false });
        });
        
        // 开始拖动
        function startDrag(e) {
            e.preventDefault();
            draggedRectangle = this;
            
            // 只有未固定的元素才能被拖动
            if (draggedRectangle.classList.contains('fixed')) return;
            
            // 获取初始位置
            if (e.type === 'mousedown') {
                initialX = e.clientX;
                initialY = e.clientY;
            } else {
                initialX = e.touches[0].clientX;
                initialY = e.touches[0].clientY;
            }
            
            // 添加移动和释放事件
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', endDrag);
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('touchend', endDrag);
            
            // 提高被拖动元素的层级
            draggedRectangle.style.zIndex = 20;
            
            // 添加拖动样式
            draggedRectangle.classList.add('dragging');
        }
        
        // 拖动中
        function drag(e) {
            if (!draggedRectangle || draggedRectangle.classList.contains('fixed')) return;
            e.preventDefault();
            
            // 计算移动距离
            if (e.type === 'mousemove') {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            } else {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            }
            
            // 设置元素位置
            draggedRectangle.style.transform = `translate(${currentX}px, ${currentY}px)`;
            
            // 检查是否在目标区域上方
            checkDropTargets(e);
        }
        
        // 结束拖动
        function endDrag() {
            if (!draggedRectangle || draggedRectangle.classList.contains('fixed')) return;
            
            // 重置样式
            draggedRectangle.style.zIndex = 10;
            draggedRectangle.classList.remove('dragging');
            
            // 移除事件监听
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('touchend', endDrag);
            
            // 检查是否在目标区域内放下
            drop(draggedRectangle);
            
            // 重置拖动状态
            draggedRectangle = null;
            initialX = initialY = currentX = currentY = 0;
            
            // 移除所有高亮
            targets.forEach(target => {
                target.classList.remove('highlight');
            });
        }
        
        // 检查是否在目标区域上方
        function checkDropTargets(e) {
            targets.forEach(target => {
                const rect = target.getBoundingClientRect();
                let x, y;
                
                if (e.type === 'mousemove' || e.type === 'mouseup') {
                    x = e.clientX;
                    y = e.clientY;
                } else {
                    x = e.touches[0].clientX;
                    y = e.touches[0].clientY;
                }
                
                // 判断鼠标/触摸点是否在目标区域内
                if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
                    target.classList.add('highlight');
                } else {
                    target.classList.remove('highlight');
                }
            });
        }
        
        // 处理放置
        function drop(rectangle) {
            let dropped = false;
            
            targets.forEach(target => {
                if (target.classList.contains('highlight')) {
                    const acceptedRectangle = target.dataset.accept;
                    
                    if (rectangle.classList.contains(acceptedRectangle)) {
                        // 正确的位置 - 固定元素
                        const rect = target.getBoundingClientRect();
                        const rectParent = rectangle.parentElement.getBoundingClientRect();
                        
                        // 计算相对于父容器的位置
                        const left = rect.left - rectParent.left + (rect.width - rectangle.offsetWidth) / 2;
                        const top = rect.top - rectParent.top + (rect.height - rectangle.offsetHeight) / 2;
                        
                        // 设置固定位置
                        rectangle.style.position = 'absolute';
                        rectangle.style.left = `${left}px`;
                        rectangle.style.top = `${top}px`;
                        rectangle.style.transform = 'none';
                        
                        // 添加固定类和视觉效果
                        rectangle.classList.add('correct-position', 'fixed');
                        
                        // 移除错误提示（如果有）
                        const existingError = target.querySelector('.error-icon');
                        if (existingError) {
                            existingError.remove();
                        }
                        
                        // 禁用目标区域
                        target.classList.add('filled');
                        
                        // 检查是否所有目标都已填满
                        checkCompletion();
                    } else {
                        // 错误的位置 - 显示错误提示
                        showErrorIcon(target);
                        
                        // 恢复原位置
                        rectangle.style.transform = 'translate(0, 0)';
                    }
                    
                    dropped = true;
                    return;
                }
            });
            
            // 如果没有放在任何目标区域，恢复原位置
            if (!dropped) {
                rectangle.style.transform = 'translate(0, 0)';
            }
        }
        
        // 显示错误提示图标
        function showErrorIcon(target) {
            // 移除现有的错误提示
            const existingError = target.querySelector('.error-icon');
            if (existingError) {
                existingError.remove();
            }
            
            // 创建新的错误提示
            const errorIcon = document.createElement('div');
            errorIcon.className = 'error-icon';
            errorIcon.innerHTML = '❌';
            errorIcon.style.position = 'absolute';
            errorIcon.style.top = '50%';
            errorIcon.style.left = '50%';
            errorIcon.style.transform = 'translate(-50%, -50%)';
            errorIcon.style.opacity = '0';
            target.appendChild(errorIcon);
            
            // 显示错误提示
            setTimeout(() => {
                errorIcon.style.opacity = '1';
                
                // 2秒后淡出
                setTimeout(() => {
                    errorIcon.style.opacity = '0';
                    setTimeout(() => {
                        if (errorIcon.parentNode) {
                            errorIcon.parentNode.removeChild(errorIcon);
                        }
                    }, 300);
                }, 2000);
            }, 10);
        }
        
        // 检查是否所有目标都已填满
        function checkCompletion() {
            const filledTargets = document.querySelectorAll('.drop-target.filled');
            const totalTargets = document.querySelectorAll('.drop-target');
            
            if (filledTargets.length === totalTargets.length) {
                // 所有目标都已填满 - 触发完成事件
                const completionMessage = document.createElement('div');
                completionMessage.className = 'completion-message';
                completionMessage.innerHTML = '恭喜！所有角色已归位！';
                completionMessage.style.position = 'fixed';
                completionMessage.style.top = '50%';
                completionMessage.style.left = '50%';
                completionMessage.style.transform = 'translate(-50%, -50%)';
                completionMessage.style.padding = '20px';
                completionMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                completionMessage.style.color = 'white';
                completionMessage.style.borderRadius = '10px';
                completionMessage.style.fontSize = '24px';
                completionMessage.style.zIndex = '30';
                completionMessage.style.opacity = '0';
                document.body.appendChild(completionMessage);
                
                // 显示完成消息
                setTimeout(() => {
                    completionMessage.style.transition = 'opacity 0.5s ease';
                    completionMessage.style.opacity = '1';
                    
                    // 3秒后淡出
                    setTimeout(() => {
                        completionMessage.style.opacity = '0';
                        setTimeout(() => {
                            document.body.removeChild(completionMessage);
                        }, 500);
                    }, 3000);
                }, 100);
            }
        }
    }

    // 6. 第六幕文字动画
    function initScene6Animation() {
        const scene6 = document.getElementById('scene6');
        const hiddenText = document.querySelector('.hidden-text1');
        const centerImage = document.querySelector('.center-image1');
        const whitePaper = document.getElementById('whitePaper');
        
        if (!scene6 || !hiddenText || !centerImage || !whitePaper) return;
        
        // 监听场景6是否可见
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    centerImage.addEventListener('click', animateText);
                    observer.unobserve(scene6);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(scene6);
        
        function animateText() {
            if (hiddenText.classList.contains('show')) return;
            
            const text = "经典剧目";
            
            hiddenText.classList.add('show');
            hiddenText.innerHTML = '';
            
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    const charSpan = document.createElement('span');
                    charSpan.textContent = text[i];
                    hiddenText.appendChild(charSpan);
                    
                    setTimeout(() => {
                        charSpan.style.opacity = '1';
                        charSpan.style.transform = 'translateY(0)';
                        
                        charSpan.animate([
                            { transform: 'translateY(-20px)', opacity: 0 },
                            { transform: 'translateY(0)', opacity: 1 }
                        ], { 
                            duration: 500, 
                            easing: 'ease-out'
                        });
    
                        if (i === text.length - 1) {
                            setTimeout(() => {
                                whitePaper.classList.add('show');
                                initSlider(); // 初始化滑动解锁
                            }, 300);
                        }
                    }, 100);
                }, i * 200);
            }
        }
        
        // 滑动解锁功能
        function initSlider() {
            const sliderThumb = document.getElementById('sliderThumb');
            const sliderTrack = document.querySelector('.slider-track');
            
            if (!sliderThumb || !sliderTrack) return;
            
            let isDragging = false;
            let startX = 0;
            let currentX = 0;
            const thumbWidth = sliderThumb.offsetWidth;
            const trackWidth = sliderTrack.offsetWidth;
            const maxDistance = trackWidth - thumbWidth;
            
            // 鼠标/触摸事件
            sliderThumb.addEventListener('mousedown', startDrag);
            sliderThumb.addEventListener('touchstart', startDrag, { passive: false });
            document.addEventListener('mousemove', drag);
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('mouseup', endDrag);
            document.addEventListener('touchend', endDrag);
            
            function startDrag(e) {
                isDragging = true;
                startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
                currentX = sliderThumb.offsetLeft;
                sliderThumb.style.transition = 'none';
                e.preventDefault();
            }
            
            function drag(e) {
                if (!isDragging) return;
                e.preventDefault();
                
                const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
                const diffX = clientX - startX;
                let newX = currentX + diffX;
                
                // 限制滑块范围
                newX = Math.max(0, Math.min(newX, maxDistance));
                
                // 更新滑块位置
                sliderThumb.style.left = `${newX}px`;
                sliderTrack.style.setProperty('--progress', `${newX / maxDistance * 100}%`);
                
                // 检查是否解锁
                if (newX >= maxDistance - 5) {
                    sliderThumb.classList.add('unlocked');
                    sliderTrack.classList.add('unlocked');
                    endDrag();
                    onUnlock();
                }
            }
            
            function endDrag() {
                if (!isDragging) return;
                isDragging = false;
                
                // 如果没有解锁，则返回起始位置
                if (!sliderThumb.classList.contains('unlocked')) {
                    sliderThumb.style.transition = 'left 0.3s ease';
                    sliderThumb.style.left = '0';
                    sliderTrack.style.setProperty('--progress', '0%');
                }
            }
            
            function onUnlock() {
                // 解锁后的操作
                const sliderContainer = document.querySelector('.slider-container');
                const contentContainer = document.getElementById('contentContainer');
                
                // 显示解锁成功消息
                sliderContainer.innerHTML = '<div class="unlock-message">解锁成功！</div>';
                
                // 1秒后淡出解锁界面并显示内容
                setTimeout(() => {
                    sliderContainer.style.opacity = '0';
                    
                    // 准备要显示的内容
                    const contentText = `《霸王别姬》又名《垓下围》《十面埋伏》《乌江自刎》。京剧传统剧目，取材于《史记•项羽本纪》，该剧目讲述了秦末，楚汉相争，项羽不听劝告，执意发兵。行至九里山附近时，遭到韩信设下十面埋伏阵，被困于垓下。
                    
        项羽感到大势已去，便回帐中与虞姬饮酒悲歌。虞姬起舞宽慰，为解除项羽后顾之忧，舞剑后自刎。项羽突围，逃至乌江，觉得无颜去见江东父老，自刎而死。`;
                    
                    // 创建内容元素
                    contentContainer.innerHTML = `<div class="content-text">${contentText}</div>`;
                    
                    // 显示内容容器
                    contentContainer.style.display = 'block';
                    setTimeout(() => {
                        contentContainer.classList.add('show');
                    }, 50);
                    
                    // 2秒后完全移除滑动解锁元素
                    setTimeout(() => {
                        sliderContainer.remove();
                    }, 2000);
                }, 1000);
            }
        }
    }

    // 初始化所有场景
    initEraseEffect();
    initRectangleDrag();
    initScene6Animation();
});    