// verifica si no estamos en un dispositivo movil / tactil
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

const isTouch = isTouchDevice();

if (!isTouch) {
  // obtener la posicion del cursor
  const customCursor = document.querySelector(".custom_cursor");
  const isClicked = "is-clicked";
  const isHidden = "is-hidden";
  const isLinkHovered = "is-link-hovered";
  const hasCustomCursor = "has-custom-cursor";
  const addEventListener = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    handleLinkHoverEvents();
    notLinkHover();
  };

  const onMouseMove = (e) => {
    customCursor.style.setProperty("--cursor-x", e.clientX + "px");
    customCursor.style.setProperty("--cursor-y", e.clientY + "px");
  };

  const onMouseDown = () => {
    customCursor.classList.add(isClicked);
  };

  const onMouseUp = () => {
    customCursor.classList.remove(isClicked);
  };

  const onMouseEnter = () => {
    customCursor.classList.remove(isHidden);
  };

  const onMouseLeave = () => {
    customCursor.classList.add(isHidden);
  };

  const contain = [spamContent]; // indico los elementos que tendran un custom_cursor
  let exept = '.exit_button'; // indico donde no quiero que aparesca el custom_cursor
  const asignLink = (arg) => { // agrego un viculo que conectara el custom_cursor al los elemntos donde se quiere mostrar
   arg.forEach((el) => {
    el.classList.add('is-link');
   })
    
  }

  const handleLinkHoverEvents = () => {
    asignLink(contain); // asigo los vinculos a los elementos donde se mostrara el custom_cursor
    // .is-link espefica en que elementos aparecera el custom_cursor
    document.querySelectorAll(".is-link").forEach((el) => {
      el.addEventListener("mouseover", () => {
        customCursor.classList.add(isLinkHovered);
        document.body.classList.add(hasCustomCursor);
      });
      el.addEventListener("mouseout", () => {
        customCursor.classList.remove(isLinkHovered);
        document.body.classList.remove(hasCustomCursor);
      });
    });
  };

  const notLinkHover = () => {
    // espefica en que elementos NO aparecera el custom_cursor
    document.querySelectorAll(`${exept}, a, button, li, input[type="button"], input[type="submit"]`).forEach((el) => {
      el.addEventListener('mouseover', () => {
        customCursor.style.display = "none";
      });
      el.addEventListener("mouseout", () => {
        customCursor.style.display = "block";
      });
    });
  }

  addEventListener();
  // si quiero aplicar el custom cursor a toda la pagina
  // document.body.classList.add(hasCustomCursor);
}
