/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.virtualSat');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['event_whenstarted'] = {
  init: function() {
    this.jsonInit({
      "message0": "when started %1",
        "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "started.svg",
          "width": 24,
          "height": 24,
          "alt": "play button"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_event", "shape_hat"]
    });
  }
};

Blockly.Blocks['virtualsat_startsequence'] = {
  init: function() {
    this.jsonInit({
      "message0": "Start Sequence By FileName %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['virtualsat_sendTouch'] = {
  init: function() {
    this.jsonInit({
      "message0": "Send Touch Message %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['virtualsat_sendMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "Send Message %1 to Satellite %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        },
        {
          "type": "input_value",
          "name": "SATELLITE"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['virtualsat_stopEvent'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 on Satellite %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        },
        {
          "type": "input_value",
          "name": "SATELLITE"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['virtualsat_waitUntilSatOne'] = {
  init: function() {
    this.jsonInit({
      "message0": "Wait until Satellite One button is pressed",
      "category": Blockly.Categories.event,
      "extensions": ["colours_control", "shape_hat"]
    });
  }
};

Blockly.Blocks['virtualsat_waitUntilSatTwo'] = {
  init: function() {
    this.jsonInit({
      "message0": "Wait until Satellite Two button is pressed",
      "category": Blockly.Categories.event,
      "extensions": ["colours_control", "shape_hat"]
    });
  }
};

Blockly.Blocks['virtualsat_waitUntilSatThree'] = {
  init: function() {
    this.jsonInit({
      "message0": "Wait until Satellite Three button is pressed",
      "category": Blockly.Categories.event,
      "extensions": ["colours_control", "shape_hat"]
    });
  }
};

Blockly.Blocks['virtualsat_waitUntilSatFour'] = {
  init: function() {
    this.jsonInit({
      "message0": "Wait until Satellite Four button is pressed",
      "category": Blockly.Categories.event,
      "extensions": ["colours_control", "shape_hat"]
    });
  }
};

Blockly.Blocks['virtualsat_waitUntilSatTouched'] = {
  init: function() {
    this.jsonInit({
      "message0": "Wait until Satellite is Touched",
      "category": Blockly.Categories.event,
      "extensions": ["colours_control", "shape_hat"]
    });
  }
};

Blockly.Blocks['virtualsat_playSound'] = {
  init: function() {
    this.jsonInit({
      "message0": "Play Sound %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};