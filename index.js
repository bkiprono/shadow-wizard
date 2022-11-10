function shadowwizard(options) {
  let images = document.querySelectorAll('.shadowwizard');

  if (options.type === "hard") {
    options.shadow_type = "0px";
  } else {
    options.shadow_type = "15px";
  }

  images.forEach(image => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0, 0.12)`;

    if (options.padding) {
      image.style.padding = '1em';
    }
  });
  let count = 0;
  setInterval(() => {
    count += 1;
    console.log("The value is: ", count);
  }, 1000);
}

module.exports.shadowwizard = shadowwizard;