import react from 'react';
import ColorChangerCss from 'src/Components/ColorChanger/ColorChanger.module.css';

class ColorChanger extends react.Component{
    render(){
        return(
            <div data-testid="color-box" id={ColorChangerCss.color_box}></div>
        )
    }
}

export default ColorChanger;