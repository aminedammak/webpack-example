import './Hello-world-button.scss';

class HelloWorldButton {

    buttonClass = "hello-button";

    render() {
        let button = document.createElement('BUTTON');
        button.innerHTML = "Hello button";
        button.classList.add(this.buttonClass);
        const body = document.querySelector("body");
        body.appendChild(button);
        button.onclick = () => {
            const p = document.createElement("P");
            p.classList.add('hello-p');
            p.innerHTML = "Hello world";
            body.appendChild(p);
        }
    }
}

export default HelloWorldButton;