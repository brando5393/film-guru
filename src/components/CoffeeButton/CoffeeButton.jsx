import React from "react";

const CoffeeButton = () => {
  return (
    <div>
      <a href="https://paypal.me/brandontwilliams5393?locale.x=en_US">
        <img
          className="coffee-img"
          src="https://media-private.canva.com/D4R9Q/MADzc1D4R9Q/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4JWSMIDQ%2F20201219%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20201219T155615Z&X-Amz-Expires=39876&X-Amz-Signature=eea25895cafc0bc4f3ffdd57671b9488c2bdc5f1479dde25d7598525667b65eb&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2020%20Dec%202020%2003%3A00%3A51%20GMT"
          alt="Like my app? Buy me a coffee."
        />
      </a>
    </div>
  );
};

export default CoffeeButton;
