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

    initialize: function()
    {
        this.bindEvents(); 
    },
 
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false); 
 
    },
    onDeviceReady: function() {
 
    AdMob.createBanner({
        adId : "ca-app-pub-5465548746999423/1523233840",
        position : AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow : true
    });

    AdMob.prepareInterstitial({
        adId:'ca-app-pub-5465548746999423/2511105787', 
        autoShow:true
    });

    
   

    var notificationOpenedCallback = function(jsonData)
    {          
        var jsonstring = JSON.stringify(jsonData);
        var jsonobject = JSON.parse(jsonstring);
        URL_APP = jsonobject.notification.payload.additionalData.foo;

        var urlfull= 'http://www.fiv5.viradinha.com.br?p=1&u='+URL_APP+'&idd='+device.uuid;        
  
        location.href = urlfull+device.uuid;
    };

     window.plugins.OneSignal
        .startInit("3ac0cc15-cd13-4660-baa8-223dc86a152a")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit(); 


 
    //AdMob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER);

    app.receivedEvent('deviceready');

    var urlfull= 'http://www.fiv5.viradinha.com.br/?idd='+device.uuid;
    location.href = urlfull;

    },receivedEvent: function(id)
    {

       
    }
};

 

 