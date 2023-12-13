        function updateClock() {
            var now = new Date();
            var seconds = now.getSeconds();
            var minutes = now.getMinutes();
            var hours = now.getHours();
            hours = hours % 12;

            var secondHand = document.querySelector('.hand:nth-child(1)');
            var minuteHand = document.querySelector('.hand:nth-child(2)');
            var hourHand = document.querySelector('.hand:nth-child(3)');

            var secondDegrees = ((seconds / 60) * 360) + 90;
            var minuteDegrees = ((minutes / 60) * 360) + 90;
            var hourDegrees = ((hours / 12) * 360) + 90;
            
            secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
            minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)';
            hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
        }

        setInterval(updateClock, 1000);
        updateClock();