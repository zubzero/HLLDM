/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


      demoReady(function() {
        var drawerEl = document.querySelector('.mdc-drawer');
        var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
        var drawer = new MDCTemporaryDrawer(drawerEl);
        document.querySelector('.demo-menu').addEventListener('click', function() {
          drawer.open = true;
        });
        drawerEl.addEventListener('MDCTemporaryDrawer:open', function() {
          console.log('Received MDCTemporaryDrawer:open');
        });
        drawerEl.addEventListener('MDCTemporaryDrawer:close', function() {
          console.log('Received MDCTemporaryDrawer:close');
        });

        // Demonstrate application of --activated modifier to drawer menu items
        var activatedClass = 'mdc-list-item--selected';
        document.querySelector('.mdc-drawer__drawer').addEventListener('click', function(event) {
          var el = event.target;
          while (el && !el.classList.contains('mdc-list-item')) {
            el = el.parentElement;
          }
          if (el) {
            var activatedItem = document.querySelector('.' + activatedClass);
            if (activatedItem) {
              activatedItem.classList.remove(activatedClass);
            }
            event.target.classList.add(activatedClass);
          }
        });

        var radioEl = document.querySelector('#demo-radio-buttons');
        radioEl.addEventListener('change', function(e) {
          drawerEl.classList.remove('demo-drawer--custom');
          drawerEl.classList.remove('demo-drawer--accessible');

          if(e.target.id === 'theme-radio-accessible') {
            drawerEl.classList.add('demo-drawer--accessible');
          } else if(e.target.id === 'theme-radio-custom') {
            drawerEl.classList.add('demo-drawer--custom');
          }
        });

        var rtlToggleBtn = document.querySelector('.demo-toolbar-example-heading__rtl-toggle-button');
        rtlToggleBtn.addEventListener('click', function(event) {
          document.body.setAttribute('dir', document.body.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl');
        });
      });
    