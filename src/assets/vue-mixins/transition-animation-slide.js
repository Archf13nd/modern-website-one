export const transitionSlide = {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    // Transition function, takes event data and the inital distance which can be positive or negative
    enter(e, done) {
      let initialValue = 300;
      const axis = "X";
      console.log("Hahahah from transitions");
      if (window.screenX < 1000) {
        return;
      }
      // Assigns the number sign and makes initalValue an absolute value
      let numberSign = "+";
      if (initialValue < 0) {
        numberSign = "-";
        initialValue *= -1;
      }

      // Sets the timestamp to calculate the time elapsed inside animation function
      let theBeginningOfTime;

      const animateSlideIn = (time) => {
        // Sets the speed
        time *= 0.2;
        // Stores when time began
        if (!theBeginningOfTime) {
          theBeginningOfTime = time;
        }
        const timeElapsed = time - theBeginningOfTime;
        // As time passes calculatedNewValue will get closer and closer to zero. Math.min() is used to prevent transform from going over its final position
        const calculatedNewValue =
          initialValue -
          Math.min((initialValue / 100) * timeElapsed, initialValue);
        // Transforms the element
        e.style.transform = `translate${axis}(${numberSign}${calculatedNewValue}px)`;
        // BASE CASE - is 100 because we divide initialValue by 100. Once time is equal to 100 initialValue subtracts 100% of itself meaning transform translate is now 0 and element is in final position
        if (timeElapsed < 100) {
          requestAnimationFrame(animateSlideIn);
        } else {
          done();
          return;
        }
      };
      requestAnimationFrame(animateSlideIn);
    },
  },
};
