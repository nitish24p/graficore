import ActionButton from './../Components/ActionButton.js';
import ColorPicker from './../Components/ColorPicker.js';
import Header from './../Components/Header.js';
import Checkbox from './../Components/Checkbox.js';
import Card from './../Components/Card.js';
import Slider from './../Components/Slider.js';

import React, { Component } from 'react';

class Home extends Component<{}, {}> {
  
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="new-parent">
          </div>

          <div className="settings-container">
            <div className="weightages-container custom-card">
              <Card heading='Adjust Weightages'>
                <Slider id='circle' label='Circle weightage'/>
                <Slider id='parallelogram1' label='Paralellogram 1'/>
                <Slider id='parallelogram2' label='Paralellogram 2'/>
                <Slider id='quarterTopLeft' label='Top left quarter ring'/>
                <Slider id='quarterTopRight' label='Top right quarter ring'/>
                <Slider id='quarterBottomLeft' label='Bottom left quarter ring'/>
                <Slider id='quarterBottomRight' label='Bottom left quarter ring'/>
                <Slider id='colorFill' label='Color Fill '/>
                <Slider id='blank' label='Blank'/>
              </Card>
            </div>


            <div className="action-btn-container custom-card">
              <Card heading='Action buttons'>
                <ActionButton label='Generate Pattern' color='teal' selector='button' darken='0'/>
                <ActionButton label='Save Pattern' color='blue' selector='download' darken='1'/>
                <ActionButton label='Redraw Pattern' color='grey' selector='recreate' darken='3'/>
                <ActionButton label='Create New Grid' color='grey' selector='new' darken='3'/>
              </Card>
            </div>
          </div>


          <div className="shape-selector-container">
            <div className="checkboxes custom-card">
              <Card heading="Select shapes">
                <Checkbox id='circle' label='Circle weightage' checked={true}/>
                <Checkbox id='parallelogram1' label='Paralellogram 1' checked={true}/>
                <Checkbox id='parallelogram2' label='Paralellogram 2' checked={true}/>
                <Checkbox id='quarterTopLeft' label='Top left quarter ring' checked={true}/>
                <Checkbox id='quarterTopRight' label='Top right quarter ring' checked={true}/>
                <Checkbox id='quarterBottomLeft' label='Bottom left quarter ring' checked={true}/>
                <Checkbox id='quarterBottomRight' label='Bottom left quarter ring' checked={true}/>
                <Checkbox id='colorFill' label='Color Fill ' checked={true}/>
                <Checkbox id='blank' label='Blank' checked={true}/>
              </Card>
            </div>

             <div className="color-picker-container custom-card">
                <div class="color-picker">
                  <Card heading='Pick a few colors'>
                    <ColorPicker />
                  </Card>
                </div>
             </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
