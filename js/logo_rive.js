const canvas = document.getElementById("rivecanvas");
        const riveInstance = new rive.Rive({
            src: "assets/logoavati.riv",
            stateMachines: "anime", 
            canvas: canvas,
            autoplay: true,
            onLoad: () => {
                const inputs = riveInstance.stateMachineInputs("anime"); 
                if (inputs) {
                    const hoverInput = inputs.find(input => input.name === "ativar");
                    if (hoverInput) {
                        canvas.addEventListener("mouse_enter", () => hoverInput.value = true);
                        canvas.addEventListener("mouse_exit", () => hoverInput.value = false);
                    } else {
                        console.error("Input booleano 'hover' não encontrado na State Machine.");
                    }
                }
            }
        });