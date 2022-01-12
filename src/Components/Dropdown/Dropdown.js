import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import DropDownCss from 'src/Components/Dropdown/Dropdown.module.css'
import ColorChangerCss from 'src/Components/ColorChanger/ColorChanger.module.css';

class Dropdown extends react.Component{
    options = [
        {
            label : 'Lime',
            value : 'lime'
        },
        {
            label : 'Lavender',
            value : 'lavender'
        },
        {
            label : 'Crimson',
            value : 'crimson'
        },
        {
            label : 'Darkblue',
            value : 'darkblue'
        },
        {
            label : 'Teal',
            value : 'teal'
        },
        {
            label : 'Rebecca Purple',
            value : 'rebeccapurple'
        },
        {
            label : 'Ghost White',
            value : 'ghostwhite'
        },
        {
            label : 'Aqua Marine',
            value : 'aquamarine'
        },
        {
            label : 'Alice Blue',
            value : 'aliceblue'
        }
    ];
    constructor(props){
        super(props);
        this.clicked=this.clicked.bind(this);
        this.dropdown=this.dropdown.bind(this);
        this.ref = react.createRef();
    }
    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick);
    }
    handleOutsideClick = (event) => {
        if (this.ref && !this.ref.current.contains(event.target)) {
            document.getElementById(DropDownCss.block).style.display="none";
            document.getElementById(DropDownCss.caret).style.transform="rotate(0deg)";
            document.getElementById(DropDownCss.caret).style.paddingLeft="10px";
        }
        else{
            this.dropdown();
        }
    }
    clicked(event){
            document.getElementById(DropDownCss.caret).style.transform="rotate(0deg)";
            document.getElementById(DropDownCss.caret).style.paddingLeft="10px";
            document.getElementById("selected_value").innerHTML=this.options[event.target.value].label;
            document.getElementById(ColorChangerCss.color_box).style.backgroundColor=this.options[event.target.value].value;
            document.getElementById(DropDownCss.dropdownContainer).style.backgroundColor=this.options[event.target.value].value;
    }
    dropdown(){
            document.getElementById(DropDownCss.caret).style.transform="rotate(180deg)";
            document.getElementById(DropDownCss.block).style.display="inline-block";
            document.getElementById(DropDownCss.caret).style.paddingRight="10px";  
    }
    render(){
        return(
            <div>
                <div id={DropDownCss.dropdownWrapper} data-testid="dropdownWrapper">
                    <div id={DropDownCss.dropdownContainer} data-testid="dropdownContainer">
                        <span id="selected_value">Select the Color</span>
                        <span ref={this.ref}><FontAwesomeIcon  id={DropDownCss.caret} icon={faCaretDown} /></span>
                    </div>
                    <div id={DropDownCss.block} data-testid="block">
                        {(()=>{
                            var list=[];
                            for(let i=0;i<this.options.length;i++){
                                list.push(<div key={this.options[i].label}><button data-testid="option" id={DropDownCss.option} value={i}  onClick={this.clicked}> {this.options[i].label} </button><br></br></div>);
                            } 
                            return list;
                        })()}
                    </div>
                </div>
            </div> 
        )
    }
}

export default Dropdown;