[ReadMe](javascript:(function()%7B%2F*%0ACreate a bookmarklet with many features%2C like some sort of hacked client%0A%0ATab Cloak%0AHistory Spammer%0Agames section%0Anotepad%0Abuilt in console%0Aproxy%3F%0AThemes%0Apage color change%0Aautoclicker%0A%0A*%2F%0A%0Alet style %3D document.createElement('style')%3B%0Alet title %3D document.createElement('h1')%3B%0Alet text %3D document.createElement('p')%3B%0Alet mainframe %3D document.createElement('div')%3B%0Alet gameframe %3D document.createElement('div')%3B%0Alet logo %3D document.createElement('img')%3B%0Alet topBar %3D document.createElement('div')%3B%0Alet minBar %3D document.createElement('div')%3B%0A%0Alet close %3D document.createElement('button')%3B%0Alet min %3D document.createElement('button')%3B%0Alet open %3D document.createElement('button')%3B%0Alet bs1 %3D document.createElement('button')%3B%0Alet bs2 %3D document.createElement('button')%3B%0Alet bs3 %3D document.createElement('button')%3B%0Alet bs4 %3D document.createElement('button')%3B%0Alet bs5 %3D document.createElement('button')%3B%0Alet bs6 %3D document.createElement('button')%3B%0Alet bs7 %3D document.createElement('button')%3B%0Alet bs8 %3D document.createElement('button')%3B%0Alet bs9 %3D document.createElement('button')%3B%0A%0Alet gt1 %3D document.createElement('button')%3B%0Alet gt2 %3D document.createElement('button')%3B%0Alet gt3 %3D document.createElement('button')%3B%0Alet gt4 %3D document.createElement('button')%3B%0Alet gt5 %3D document.createElement('button')%3B%0Alet gt6 %3D document.createElement('button')%3B%0A%0Amainframe.id %3D 'mainClient'%3B%0Agameframe.id %3D 'gameFrame'%3B%0AtopBar.id %3D 'topBar'%3B%0Aclose.id %3D 'close'%3B%0Amin.id %3D 'min'%3B%0Aopen.id %3D 'open'%3B%0AminBar.id %3D 'minBar'%3B%0Abs1.id %3D 'btn1'%3B%0Abs2.id %3D 'btn2'%3B%0Abs3.id %3D 'btn3'%3B%0Abs4.id %3D 'btn4'%3B%0Abs5.id %3D 'btn5'%3B%0Abs6.id %3D 'btn6'%3B%0Abs7.id %3D 'btn7'%3B%0Abs8.id %3D 'btn8'%3B%0Abs9.id %3D 'btn9'%3B%0A%0Agt1.id %3D 'gt1'%3B%0Agt2.id %3D 'gt2'%3B%0Agt3.id %3D 'gt3'%3B%0Agt4.id %3D 'gt4'%3B%0Agt5.id %3D 'gt5'%3B%0Agt6.id %3D 'gt6'%3B%0A%0Adocument.body.appendChild(mainframe)%3B%0Adocument.body.appendChild(minBar)%3B%0Amainframe.append(topBar%2Ctitle%2Ctext%2Cbs1%2Cbs2%2Cbs3%2Cbs4%2Cbs5%2Cbs6%2Cbs7%2Cbs8)%3B%0Amainframe.append(style)%3B%0Amainframe.append(gameframe)%3B%0Agameframe.append(gt1%2Cgt2%2Cgt3%2Cgt4%2Cgt5%2Cgt6)%3B%0AtopBar.append(close)%3B%0AtopBar.append(min)%3B%0AtopBar.append(open)%3B%0A%0Atitle.textContent %3D 'Luminesence'%3B%0Atext.textContent %3D 'An advanced hacked client.'%3B%0Abs1.textContent %3D 'Tab Cloak'%3B%0Abs2.textContent %3D 'History'%3B%0Abs3.textContent %3D 'Themes'%3B%0Abs4.textContent %3D 'Darkmode'%3B%0Abs5.textContent %3D 'Notepad'%3B%0Abs6.textContent %3D 'Adblock%2B'%3B%0Abs7.textContent %3D 'Games'%3B%0Abs8.textContent %3D 'Console'%3B%0Abs9.textContent %3D 'Autoclicker'%3B%0A%0Agt1.textContent %3D 'Snake'%3B%0Agt2.textContent %3D 'Pinball'%3B%0Agt3.textContent %3D '2048'%3B%0Agt4.textContent %3D 'The House'%3B%0Agt5.textContent %3D 'The Wall'%3B%0Agt6.textContent %3D 'Astroids'%3B%0A%0Atitle.style.paddingTop %3D '10px'%3B%0A%0AdragElement(document.getElementById("mainClient"))%3B%0A%0Afunction dragElement(elmnt) %7B%0A  var pos1 %3D 0%2C pos2 %3D 0%2C pos3 %3D 0%2C pos4 %3D 0%3B%0A  if (document.getElementById(elmnt.id %2B "header")) %7B%0A    document.getElementById(elmnt.id %2B "header").onmousedown %3D dragMouseDown%3B%0A  %7D else %7B%0A    elmnt.onmousedown %3D dragMouseDown%3B%0A  %7D%0A%0A  function dragMouseDown(e) %7B%0A    e %3D e %7C%7C window.event%3B%0A    e.preventDefault()%3B%0A    pos3 %3D e.clientX%3B%0A    pos4 %3D e.clientY%3B%0A    document.onmouseup %3D closeDragElement%3B%0A    document.onmousemove %3D elementDrag%3B%0A  %7D%0A%0A  function elementDrag(e) %7B%0A    e %3D e %7C%7C window.event%3B%0A    e.preventDefault()%3B%0A    pos1 %3D pos3 - e.clientX%3B%0A    pos2 %3D pos4 - e.clientY%3B%0A    pos3 %3D e.clientX%3B%0A    pos4 %3D e.clientY%3B%0A    elmnt.style.top %3D (elmnt.offsetTop - pos2) %2B "px"%3B%0A    elmnt.style.left %3D (elmnt.offsetLeft - pos1) %2B "px"%3B%0A  %7D%0A%0A  function closeDragElement() %7B%0A    document.onmouseup %3D null%3B%0A    document.onmousemove %3D null%3B%0A  %7D%0A%7D%0A%0Aclose.onclick %3D () %3D> %7B%0A    mainframe.parentNode.removeChild(mainframe)%3B%0A    minBar.parentNode.removeChild(minBar)%3B%0A%7D%0A%0AminBar.style.display %3D 'none'%3B%0AminBar.innerHTML %3D 'open'%3B%0Amin.onclick %3D () %3D> %7B%0A    mainframe.style.display %3D 'none'%3B%0A    minBar.style.display %3D 'block'%3B%0A%7D%0A%0AminBar.onclick %3D () %3D> %7B%0A    mainframe.style.display %3D 'block'%3B%0A    minBar.style.display %3D 'none'%3B%0A%7D%0A%0Aopen.onclick %3D () %3D> %7B%0A    if (mainframe.style.width %3D%3D%3D '100%25') %7B%0A        mainframe.style.width %3D '800px'%0A        mainframe.style.height %3D '600px'%0A        mainframe.style.top %3D '2rem'%0A    %7D else %7B%0A        mainframe.style.width %3D '100%25'%3B%0A        mainframe.style.height %3D '100%25'%3B%0A        mainframe.style.top %3D '0'%3B%0A        mainframe.style.left %3D '0'%3B%0A    %7D%0A%7D%0A%0Abs1.onclick %3D () %3D> %7B%0A    text.style.display %3D ''%3B%0A    text.textContent %3D 'Activated tab cloak'%3B%0A    document.title %3D prompt("Name of tab%3A")%3B%0A%7D%0A%0Abs2.onclick %3D () %3D> %7B%0A    text.style.display %3D ''%3B%0A    text.textContent %3D 'Activated Flood'%3B%0A    javascript%3Avar num%3Dprompt('How Times Do You Want This Page To Show Up In your History%3F')%3Bdone%3Dfalse%3Bx%3Dwindow.location.href%3Bfor (var i%3D1%3B i<%3Dnum%3B i%2B%2B)%7Bhistory.pushState(0%2C 0%2C i%3D%3Dnum%3Fx%3Ai.toString())%3Bif(i%3D%3Dnum)%7Bdone%3Dtrue%7D%7Dif(done%3D%3D%3Dtrue)%7Balert('Flooding Successful!%5Cn '%2Bwindow.location.href%2B' %5CnIs Now In Your History '%2Bnum%2B(num%3D%3D1%3F' time.'%3A' Times.'))%7D%0A%7D%0A%0Abs3.onclick %3D () %3D> %7B%0A    text.style.display %3D ''%3B%0A    text.textContent %3D 'Changed theme'%3B%0A    const themeMap %3D %7B%0A        dark%3A 'light'%2C%0A        light%3A 'solar'%2C%0A        solar%3A 'dark'%0A      %7D%3B%0A      %0A      const theme %3D localStorage.getItem('theme')%0A        %7C%7C (tmp %3D Object.keys(themeMap)%5B0%5D%2C%0A            localStorage.setItem('theme'%2C tmp)%2C%0A            tmp)%3B%0A      const bodyClass %3D mainframe.classList%3B%0A      bodyClass.add(theme)%3B%0A      %0A      function toggleTheme() %7B%0A        const current %3D localStorage.getItem('theme')%3B%0A        const next %3D themeMap%5Bcurrent%5D%3B%0A      %0A        bodyClass.replace(current%2C next)%3B%0A        localStorage.setItem('theme'%2C next)%3B%0A      %7D%0A      %0A      toggleTheme()%3B  %0A%7D%0A%0Abs4.onclick %3D () %3D> %7B%0A    javascript%3A(function()%7Bvar newSS%2C styles%3D'* %7B background%3A black !important%3B color%3A %23C0C0C0 !important%3B line-height%3A1.7em !important%7D %3Alink%2C %3Alink * %7B color%3A %230099FF !important %7D %3Avisited%2C %3Avisited * %7B color%3A %236666CC !important %7D'%3B if(document.createStyleSheet) %7B document.createStyleSheet("javascript%3A'"%2Bstyles%2B"'")%3B %7D else %7B newSS%3Ddocument.createElement('link')%3B newSS.rel%3D'stylesheet'%3B newSS.href%3D'data%3Atext%2Fcss%2C'%2Bescape(styles)%3B document.getElementsByTagName("head")%5B0%5D.appendChild(newSS)%3B %7D %7D)()%3B%0A%7D%0A%0Abs5.onclick %3D () %3D> %7B%0A    text.style.display %3D ''%3B%0A    text.textContent %3D 'Opened notes'%0A    javascript%3A(function()%7B%0A        var parentID %3D 'a3q_parent'%3B%0A        var dID %3D 'a3q_customNotes'%3B%0A        var buttonID %3D 'a3q_close_button'%3B%0A        var saveThrottleSpeed %3D 100%3B%0A        var lastSave %3D Date.now()%3B%0A        var waitCallback%3B%0A    %0A        function a3q_Save(force)%7B%0A            force %3D force %7C%7C false%3B%0A            clearTimeout( waitCallback )%3B%0A            if( force %7C%7C Date.now() - lastSave >%3D saveThrottleSpeed ) %7B%0A                lastSave %3D Date.now()%3B%0A                localStorage.setItem( 'a3q_note'%2C a3q_GetContents() )%3B%0A            %7D else %7B%0A                waitCallback %3D setTimeout(function()%7B%0A                    a3q_Save()%3B%0A                %7D%2C saveThrottleSpeed - Date.now())%3B%0A            %7D%0A        %7D%3B%0A    %0A        function a3q_Load() %7B%0A            return localStorage.getItem( 'a3q_note' ) %7C%7C ''%3B%0A        %7D%3B%0A    %0A        function a3q_GetContents() %7B%0A            return document.getElementById( dID ).innerHTML%3B%0A        %7D%3B%0A    %0A        function a3q_Unload() %7B%0A            a3q_Save( true )%3B%0A            d.removeEventListener( 'onkeyup'%2C a3q_Save )%3B%0A            d.parentNode.removeChild( d )%3B%0A            c.removeEventListener( 'onclick'%2C c.onclick )%3B%0A            c.parentNode.removeChild( c )%3B%0A            e.parentNode.removeChild( e )%3B%0A        %7D%3B%0A    %0A        var d %3D document.getElementById( dID )%3B%0A        var c %3D document.getElementById( buttonID )%3B%0A        if ( d ) %7B%0A            a3q_Unload()%3B%0A        %7D else %7B%0A            var d %3D document.createElement( 'div' )%3B%0A            d.id %3D dID%3B%0A            d.innerHTML %3D a3q_Load()%3B%0A            d.style.backgroundColor %3D '%23333'%3B%0A            d.style.color %3D '%23ccc'%3B%0A            d.style.border %3D '1px solid %23ccc'%3B%0A            d.style.position %3D 'fixed'%3B%0A            d.style.width %3D '800px'%3B%0A            d.style.height %3D '600px'%3B%0A            d.style.left %3D 'calc(50%25 - 400px)'%3B%0A            d.style.top %3D 'calc(50%25 - 300px)'%3B%0A            d.style.padding %3D '5px'%3B%0A            d.style.zIndex %3D 10000%3B%0A            d.contentEditable %3D true%3B%0A            document.body.appendChild( d )%3B%0A            d.focus()%3B%0A            var lastRun %3D Date.now()%3B%0A    %0A            d.onkeyup %3D a3q_Save%3B%0A            var c %3D document.createElement( 'button' )%3B%0A            c.style.position %3D 'fixed'%3B%0A            c.id %3D buttonID%3B%0A            c.style.zIndex %3D 10000%3B%0A            c.style.top %3D 'calc(50%25 %2B 300px)'%3B%0A            c.style.left %3D 'calc(50%25 %2B 350px)'%3B%0A            c.innerHTML %3D 'Close'%3B%0A            c.style.backgroundColor %3D '%23333'%3B%0A            c.style.color %3D '%23ccc'%3B%0A            c.onclick %3D function()%7B%0A                a3q_Unload()%3B%0A            %7D%3B%0A            var e %3D document.createElement('button')%3B%0A            e.style.position %3D 'fixed'%3B%0A            e.id %3D buttonID%3B%0A            e.style.zIndex %3D 10000%3B%0A            e.style.top %3D 'calc(50%25 %2B 300px)'%3B%0A            e.style.left %3D 'calc(0%25 %2B 50px)'%3B%0A            e.innerHTML %3D 'Run'%3B%0A            e.style.backgroundColor %3D '%23333'%3B%0A            e.style.color %3D '%23ccc'%3B%0A            e.onclick %3D () %3D> %7B%0A                eval(d.innerText)%3B%0A            %7D%3B%0A            document.body.appendChild(c)%3B%0A            document.body.appendChild(e)%3B%0A        %7D%0A    %7D)()%3B%0A%7D%0A%0Abs6.onclick %3D () %3D> %7B%0A    javascript:(function()%7Bfunction R(w)%7Btry%7Bvar d%3Dw.document,j,i,t,T,N,b,r%3D1,C%3Bfor(j%3D0%3Bt%3D%5B"object","embed","applet","iframe"%5D%5Bj%5D%3B%2B%2Bj)%7BT%3Dd.getElementsByTagName(t)%3Bfor(i%3DT.length-1%3B(i%2B1)%26%26(N%3DT%5Bi%5D)%3B--i)if(j!%3D3%7C%7C!R((C%3DN.contentWindow)%3FC:N.contentDocument.defaultView))%7Bb%3Dd.createElement("div")%3Bb.style.width%3DN.width%3B b.style.height%3DN.height%3Bb.innerHTML%3D"<del>"%2B(j%3D%3D3%3F"third-party "%2Bt:t)%2B"</del>"%3BN.parentNode.replaceChild(b,N)%3B%7D%7D%7Dcatch(E)%7Br%3D0%7Dreturn r%7DR(self)%3Bvar i,x%3Bfor(i%3D0%3Bx%3Dframes%5Bi%5D%3B%2B%2Bi)R(x)%7D)()%0A%7D%0A%0Agameframe.style.display %3D 'none'%0Abs7.onclick %3D () %3D> %7B%0A    if (gameframe.style.display %3D%3D%3D 'block') %7B%0A        gameframe.style.display %3D 'none'%3B%0A    %7D else %7B%0A        gameframe.style.display %3D 'block'%3B%0A    %7D%0A%7D%0A%0Abs8.onclick %3D () %3D> %7B%0A  let stylething %3D document.createElement('style')%3B%0A  document.head.appendChild(stylething)%3B%0A  let mainCommand %3D document.createElement('div')%3B%0A  mainCommand.id %3D 'mainCommand'%3B%0A  document.body.appendChild(mainCommand)%3B%0A  mainCommand.appendChild(style)%3B%0A  let goback %3D document.createElement('button')%3B%0A  goback.id %3D 'goback'%3B%0A  let console %3D document.createElement('input')%3B%0A  let box %3D document.createElement('div')%3B%0A  console.id %3D 'console'%3B%0A  box.id %3D 'box'%3B%0A  mainCommand.appendChild(console)%3B%0A  mainCommand.appendChild(box)%3B%0A  console.placeholder %3D 'Crwn help'%3B%0A  goback.style.display %3D ''%3B%0A  goback.textContent %3D 'Go back'%3B%0A  mainCommand.appendChild(goback)%3B%0A  goback.onclick %3D () %3D> %7B%0A    mainCommand.style.display %3D 'none'%0A  %7D%0A  stylething.textContent %3D %60%0A%40import url('https%3A%2F%2Ffonts.googleapis.com%2Fcss2%3Ffamily%3DOpen%2BSans%3Awght%40300%26display%3Dswap')%3B%0A%23console %7B%0A  width%3A 250px !important%3B%0A  border-style%3A none%3B%0A  height%3A 50px !important%3B%0A  background-color%3A black%3B%0A  color%3A green%3B%0A  font-family%3A 'Open Sans'%3B%0A  margin%3A auto auto%3B%0A%7D%0A%23console%3A%3Aplaceholder %7B%0A  color%3A green%3B%0A  font-family%3A 'Open Sans'%3B%0A%7D%0A%23goback %7B%0Az-index%3A 999999 !important%3B%0A%7D%0A%23box %7B%0A  color%3A green%3B%0A  width%3A 250px !important %3B%0A  height%3A 250px !important%3B%0A  background-color%3A black%3B%0A  margin%3A auto auto%3B%0A  padding%3A 5px%3B%0A  font-family%3A 'Open Sans'%3B%0A  border-style%3A none%3B%0A overflow-y%3A scroll%3B %0A%7D%0A%60%0A  console.addEventListener('keyup'%2C function (event) %7B%0A    if (event.keyCode %3D%3D%3D 13) %7B%0A      event.preventDefault()%3B%0A      var extra %3D ""%3B%0A      let output %3D document.createElement('p')%0A      output.textContent %3D console.value%0A      box.appendChild(output)%0A      if (console.value.includes('crwn')) %7B%0A        output.value %3D console.value%0A      %7D%0A      else %7B%0A        output.textContent %3D 'Unknown command ~ ' %2B console.value %2B '~'%0A        output.style.color %3D 'red'%0A      %7D%0A      if (console.value %3D%3D 'crwn console blue') %7B%0A        output.textContent %3D 'Changed console theme to blue'%0A        box.style.backgroundColor %3D 'blue'%0A      %7D%0A      else if (console.value %3D%3D 'crwn console green') %7B%0A        output.value %3D console.value%0A        output.textContent %3D 'Changed console theme to green'%0A        box.style.backgroundColor %3D 'green'%0A      %7D%0A      else if (console.value %3D%3D 'crwn custom theme') %7B%0A        let bozo %3D prompt('Enter Image URL')%0A        output.value %3D console.value%0A        document.body.style.backgroundImage %3D 'url(' %2B bozo %2B ')'%3B%0A        output.textContent %3D 'Added custom theme to page'%0A      %7D%0A      else if (console.value %3D%3D 'crwn new') %7B%0A        output.textContent %3D "if (console.value %3D%3D ~command- name-here~ %7B code here %7D else %7Boutput.textContent ~Unknown command~ ' %2B console.value %2B ''' output.style.color %3D 'red'%7D"%0A      %7D%0A      else if (console.value %3D%3D 'crwn edit') %7B%0A        javascript%3A document.body.contentEditable %3D true%3B document.designMode %3D 'on'%3B void 0%3B%0A        output.textContent %3D 'Edit Mode turned on.'%0A      %7D%0A      else if (console.value %3D%3D 'crwn create cmd') %7B%0A        let name %3D prompt('Name your command')%0A        let prefix %3D 'crwn'%0A        let func %3D prompt('Paste your JS code. Do crwn new for the basic command creation guide.')%0A        let store %3D prefix %2B ' ' %2B name%0A        extra %3D store%3B%0A        eval(func)%3B%0A        window.localStorage.setItem('store'%2C store.toString())%3B%0A        window.localStorage.setItem('func'%2C func.toString())%3B%0A        output.textContent %3D 'Executed ' %2B store%0A      %7D%0A      else if (console.value %3D%3D 'crwn proxify site') %7B%0A        let proxify %3D prompt('Enter site URL')%0A        var code2 %3D ' width%3D100%25 height%3D100%25>'%3B var proxyDomain %3D 'https%3A%2F%2Fpalladium-2.anirudhiscool.repl.co%2Fservice%2Fgateway%2F%3Furl%3D'%3B var codeIP1 %3D code1.concat(proxyDomain)%3B var codeIP2 %3D codeIP1.concat(proxify)%3B var codeIP3 %3D codeIP2.concat(code2)%3B document.write(codeIP3)%3B%0A      %7D%0A      else if (console.value %3D%3D 'crwn install pall') %7B%0A        output.textContent %3D 'Downloaded palladium proxy. Using repl.co domain.'%0A        let proxyDomain %3D 'https%3A%2F%2Fpalladium-2.anirudhiscool.repl.co%2Fservice%2Fgateway%2F%3Furl%3D'%3B%0A      %7D %0A      %0A      else if (console.value %3D%3D 'crwn 3d') %7B%0A        output.textContent %3D '3D ifyed!'%0A      %7D%0A      else if (console.value %3D%3D 'crwn delete css') %7B%0A        mainframe.style.display %3D 'none'%0A        javascript%3A(function()%7Bvar i%2Cl%2Cstyles %3D document.styleSheets%3Bfor(i%3D0%2Cl%3Dstyles.length%3Bi<l%3Bi%2B%2B)%7Bstyles%5Bi%5D.disabled %3D true%3B%7D%7D)()%0A      %7D%0A      else if (console.value %3D%3D 'crwn calc') %7B%0A        javascript%3Aeval('function calc()%7B_o%3Dprompt(_t%2C_z)%3Bif(_o!%3D%5C'%5C'%26%26_o!%3Dnull%26%26_o.toUpperCase()%3D%3D_o.toLowerCase())_z%3Deval(_o)%3B%7D')%3B_t%3D'JAVASCRIPTER.NET Calculator - Input the expression to be calculated%3A'%3B_z%3D''%3Bcalc()%3Bwhile(_o!%3D''%26%26_o!%3Dnull%26%26_o.toUpperCase()%3D%3D_o.toLowerCase())calc()%0A      %7D%0A      else if (console.value %3D%3D 'crwn help') %7B%0A        output.textContent %3D %60Put crwn infront of any command%3A console green%2Fblue%2C custom theme - makes custom theme%2C new%2C edit%2C create cmd%2C proxify site%2C install pall%2C clear cookies%2C delete css%2C calc%2C 3d%2C about%3Ablank%2C %24%7BlocalStorage.getItem('store')%7D%60%0A      %7D%0A      else if (console.value %3D%3D 'crwn clear cookies') %7B%0A        output.textContent %3D 'Cookies cleared!'%0A        javascript%3A(function()%7Bdocument.cookie.split("%3B").forEach(function(c) %7B document.cookie %3D c.replace(%2F%5E %2B%2F%2C "").replace(%2F%3D.*%2F%2C "%3D%3Bexpires%3D" %2B new Date().toUTCString() %2B "%3Bpath%3D%2F")%3B %7D)%3B %7D)()%3B%0A        window.localStorage.clear()%3B%0A%0A        %0A      %7D%0A      else if (console.value %3D%3D 'crwn about%3Ablank') %7B%0A        location.href %3D 'https%3A%2F%2F' %2B prompt("Link adress%3A")%3B%0A    %7D%0A      else if (console.value %3D%3D localStorage.getItem('store')) %7B%0A        eval(window.localStorage.getItem('func'))%0A      %7D%0A      else %7B%0A        output.textContent %3D 'Unknown command  ' %2B console.value %2B ''%0A        output.style.color %3D 'red'%0A      %7D%0A    %7D%0A  %7D)%3B%0A%7D%0A%0Abs9.onclick %3D () %3D> %7B%0A    javascript%3Avar DELAY %3D 1%3Bvar autoClickerStyleElement %3D document.createElement("style")%3BautoClickerStyleElement.innerHTML%3D"*%7Bcursor%3A crosshair !important%3B%7D"%3Bdocument.body.appendChild(autoClickerStyleElement)%3Bfunction addClicker(e) %7Bif(!e.isTrusted) %7Breturn%3B%7Dif(e.target.classList.contains("auto-clicker-target")) %7Be.target.classList.remove("auto-clicker-target")%3B%7D else %7Be.target.classList.add("auto-clicker-target")%3B%7Ddocument.body.removeChild(autoClickerStyleElement)%3Bdocument.body.removeEventListener("click"%2C addClicker)%3Be.preventDefault()%3BautoClick(e.target)%3B%7Dfunction autoClick(element) %7Bif(element.classList.contains("auto-clicker-target")) %7Belement.click()%3BsetTimeout(function()%7B autoClick(element)%3B %7D%2C DELAY)%3B%7D%7Ddocument.body.addEventListener("click"%2C addClicker%2C 0)%3B%0A%7D%0A%0Agt1.onclick %3D () %3D> %7B%0A    javascript%3AQ%3D64%3Bm%3Db%3DQ*Q%3Ba%3D%5BP%3Dl%3Du%3Dd%3Dp%3DS%3Dw%3D0%5D%3Bu%3D89%3Bf%3D(h%3Dj%3Dt%3D(b%2BQ)%2F2)-1%3B(B%3D(D%3Ddocument).body).appendChild(x%3DD.createElement('p'))%3B(X%3Dx.style).position%3D'fixed'%3BX.left%3DX.top%3D0%3BX.background%3D'%23FFF'%3Bx.innerHTML%3D'<p><%2Fp><canvas>'%3Bv%3D(s%3Dx.childNodes)%5B0%5D%3B(s%3Ds%5B1%5D).width%3Ds.height%3D5*Q%3Bc%3Ds.getContext('2d')%3B onkeydown%3Donblur%3DF%3Dfunction(e%2Cg)%7Bg%3Fa%5Bf%5D%3F(w%2B%3Dm%2Cf%3DMath.random(l%2B%3D8)*(R%3DQ-2)*R%7C(u%3D0)%2CF(f%2B%3DQ%2B1%2B2*(f%2FR%7C0)%2Cg))%3AF(f)%3A0>e%3F(l%3F--l%3A(y%3Dt%2Ct%3Da%5Bt%5D-2%2CF(y))%2CS%2B%3D(w*%3D0.8)%2F4%2Cm%3D999%2F(u%2B%2B %2B10)%2Ca%5Bh%2B%3D%5B-1%2C-Q%2C1%2CQ%5D%5Bd%3Dp%5D%5D%3FB.removeChild(x%2Calert('Game Over'))%3A(F(h)%2CF(e%2Cj%3Dh)%2Cv.innerHTML%3DP%3F(setTimeout(F%2C50%2Ce%2C0)%2CS%7C0)%3A'Press P'))%3A-e%3F(y%3D(a%5Be%5D%3De<Q%7Ce>%3DQ*Q-Q%7C!(e%25Q)%7Ce%25Q%3D%3DQ-1%7C2*(e%3D%3Dh))%2B(e%3D%3Df)%2Ce%3D%3Dh%26%26(a%5Bj%5D%3D2%2Bh)%2Cc.fillStyle%3D'hsl('%2B99*!a%5Be%5D%2B'%2C'%2B2*m%2B'%25%2C'%2B50*y%2B'%25)'%2Cc.fillRect(e%25Q*5%2C5*(e%2FQ%7C0)%2C5%2C5))%3AisNaN(y%3De.keyCode-37)%7C43%3D%3Dy%3F(P%3Dy%26%26!P)%26%26F(-1)%3A p%3D!P%7Cy%26-4%7C!(y%5E2%5Ed)%3Fp%3Ay%3Breturn!1%7D%3Bfor(%3B--b%3BF(b))%3Bvoid F(-1)%3B%0A%7D%0A%0Agt2.onclick %3D () %3D> %7B%0A    javascript%3A(function()%7Bvar js%3Ddocument.body.appendChild(document.createElement("script"))%3Bjs.onerror%3Dfunction()%7Balert("Sorry%2C the script could not be loaded.")%7D%3Bjs.src%3D"https%3A%2F%2Frawgit.com%2FKrazete%2Fbookmarklets%2Fmaster%2Flupire.js"%7D)()%3B%0A%7D%0A%0Agt3.onclick %3D () %3D> %7B%0A    javascript%3A(t%3D>%7Bvar s%3Ddocument.createElement(t)%3Bs.type%3D'text%2Fjava'%2Bt%3Bs.src%3D'https%3A%2F%2Fsheeptester.github.io%2Fjavascripts%2F2048.js'%3Bdocument.body.appendChild(s)%3B%7D)('script')%3B%0A%7D%0A%0Agt4.onclick %3D () %3D> %7B%0A    javascript%3Avar s%3Ddocument.createElement('script')%3Bs.type%3D'text%2Fjavascript'%3Bs.src%3D'https%3A%2F%2Fsheeptester.github.io%2Fthingkingland%2Fbookmarklets%2FtheHouse.js'%3Bdocument.body.appendChild(s)%3B%0A%7D%0A%0Agt5.onclick %3D () %3D> %7B%0A    javascript%3At%3Ddocument.title%3Bdocument.title%3D"Loading..."%3Br%3Dnew XMLHttpRequest()%3Br.onload%3Dfunction(e)%7Beval(e.currentTarget.responseText)%7D%3Br.open("GET"%2C"https%3A%2F%2Fplainsightcollection.github.io%2Fweb%2Fwallball%2Fldr.js"%2Ctrue)%3Br.send()%3Bundefined%3B%0A%7D%0A%0Agt6.onclick %3D () %3D> %7B%0A    javascript%3Avar s%3Ddocument.createElement('script')%3Bs.type%3D'text%2Fjavascript'%3Bs.onerror%3Dfunction(e)%7Balert('Failed to load the script. The site%5C's Content Security Policy might be blocking it. Feel free to try again.')%3B%7D%3Bdocument.body.appendChild(s)%3Bs.src%3D'https%3A%2F%2Fblog.roysolberg.com%2Fjs%2Fdom2.min.js'%3Bvoid(0)%3B%0A%7D%0A%0Astyle.textContent %3D %60%0A%3Aroot %7B%0A    font-size%3A 16px%3B%0A    font-family%3A 'Open Sans'%3B%0A    --text-primary%3A %23fff%3B%0A    --text-secondary%3A %23E7E7E7%3B%0A    --bg-primary%3A linear-gradient(143deg%2C rgba(2%2C0%2C36%2C1) 0%25%2C rgba(67%2C124%2C208%2C1) 0%25%2C rgba(73%2C224%2C255%2C1) 100%25)%3B%0A    --bg-secondary%3A lightblue%3B%0A    --transition-speed%3A 600ms%3B%0A  %7D%0A.dark %7B%0A    --text-primary%3A %23fff%3B%0A    --text-secondary%3A %23ececec%3B%0A    --bg-primary%3A linear-gradient(180deg%2C rgba(40%2C40%2C40%2C1) 48%25%2C rgba(0%2C0%2C0%2C1) 96%25)%3B%0A    --bg-secondary%3A %23141418%3B%0A    background-color%3A %231f2223%3B%0A  %7D%0A  %0A  .light %7B%0A    --text-primary%3A %23fff%3B%0A    --text-secondary%3A %23E7E7E7%3B%0A    --bg-primary%3A linear-gradient(143deg%2C rgba(2%2C0%2C36%2C1) 0%25%2C rgba(67%2C124%2C208%2C1) 0%25%2C rgba(73%2C224%2C255%2C1) 100%25)%3B%0A    --bg-secondary%3A lightblue%3B%0A    background%3A linear-gradient(143deg%2C rgba(2%2C0%2C36%2C1) 0%25%2C rgba(67%2C124%2C208%2C1) 0%25%2C rgba(73%2C224%2C255%2C1) 100%25)%3B%0A  %7D%0A  %0A  .solar %7B%0A    --text-primary%3A %23fff%3B%0A    --text-secondary%3A %2335535c%3B%0A    --bg-primary%3A linear-gradient(180deg%2C rgba(247%2C247%2C247%2C0.8043811274509804) 0%25%2C rgba(139%2C214%2C110%2C1) 0%25%2C rgba(29%2C128%2C8%2C1) 100%25)%3B%0A    --bg-secondary%3A %23fefefe%3B%0A    color%3A black%3B%0A  %7D%0A%23close %7B%0A    background%3A %23FF5D5B%3B%0A    border%3A 4px solid %23CF544D%3B%0A    border-radius%3A 100%25%3B%0A    max-height%3A 10px%3B%0A    right%3A 45px%3B%0A    padding%3A 3px%3B%0A    position%3A absolute%3B%0A%7D%0A%23close %3Abefore%2C %23close %3Aafter %7B%0A    background%3A %23460100%3B%0A%7D%0A%23min %7B%0A    background%3A %23FFBB39%3B%0A    border%3A 4px solid %23CFA64F%3B%0A    border-radius%3A 100%25%3B%0A    max-height%3A 10px%3B%0A    right%3A 25px%3B%0A    padding%3A 3px%3B%0A    position%3A absolute%3B%0A%7D%0A%23min %3Abefore%2C %23min %3Aafter %7B%0A    background%3A %23460100%3B%0A%7D%0A%23open %7B%0A    background%3A %2300CD4F%3B%0A    border%3A 4px solid %230EA642%3B%0A    border-radius%3A 100%25%3B%0A    max-height%3A 10px%3B%0A    right%3A 5px%3B%0A    padding%3A 3px%3B%0A    position%3A absolute%3B%0A%7D%0A%23open %3Abefore%2C %23open %3Aafter %7B%0A    background%3A %23024D0F%3B%0A%7D%0A%23gameFrame %7B%0A    width%3A 736px%3B%0A    height%3A fit-content%3B%0A    position%3A absolute%3B%0A%0A%7D%0A%23topBar %7B%0A    top%3A 15px%3B%0A    position%3A relative%3B%0A    background%3A linear-gradient(90deg%2C rgba(247%2C247%2C247%2C0.8043811274509804) 0%25%2C rgba(237%2C237%2C237%2C0.7539609593837535) 44%25%2C rgba(210%2C210%2C210%2C0.7007396708683473) 100%25)%3B    %0A    width%3A 736px%3B%0A    z-index%3A 100002%3B%0A    height%3A 15px%3B%0A    cursor%3A move%3B%0A    border-radius%3A 15px%3B%0A    margin%3A auto%3B%0A    margin-bottom%3A 1rem%3B%0A    box-shadow%3A rgba(149%2C 157%2C 165%2C 0.2) 0px 8px 24px%3B%0A%7D%0A%23minBar %7B%0A    bottom%3A -5px%3B%0A    left%3A 50px%3B%0A    position%3A fixed%3B%0A    width%3A 250px%3B%0A    height%3A 25px%3B%0A    box-shadow%3A rgba(60%2C 64%2C 67%2C 0.3) 0px 1px 2px 0px%2C rgba(60%2C 64%2C 67%2C 0.15) 0px 2px 6px 2px%3B%0A    border-radius%3A 8px%3B%0A    z-index%3A 20%3B%0A    text-align%3A center%3B%0A    font-family%3A Inter%2C-apple-system%2Csystem-ui%2C'Segoe UI'%2CHelvetica%2CArial%2Csans-serif%3B%0A    background%3A rgb(247%2C247%2C247)%3B%0A    background%3A linear-gradient(90deg%2C rgba(247%2C247%2C247%2C0.8043811274509804) 0%25%2C rgba(237%2C237%2C237%2C0.7539609593837535) 44%25%2C rgba(210%2C210%2C210%2C0.7007396708683473) 100%25)%3B%0A    animation-name%3A slidein%3B%0A    animation-duration%3A 1s%3B%0A%7D%0Ap%2C h1 %7B%0A    color%3A var(--text-primary)%3B%0A%7D%0A%23mainClient %7B%0A    background%3A var(--bg-primary)%3B%0A    width%3A 800px%3B%0A    height%3A 600px%3B%0A    border-radius%3A 10px%3B%0A    animation-name%3A slidein%3B%0A    animation-duration%3A 2s%3B%0A    text-align%3A center%3B%0A    margin%3A auto auto%3B%0A    position%3A fixed%3B%0A    overflow%3A auto%3B%0A    left%3A var(--x-axis%2C 2rem)%3B%0A    top%3A var(--y-axis%2C 2rem)%3B%0A    z-index%3A 10000%3B %0A    box-shadow%3A 5px 10px 18px %23888888%3B%0A    padding-left%3A 2rem%3B%0A    padding-right%3A 2rem%3B%0A    padding-top%3A 10px%3B%0A    font-family%3A Inter%2C-apple-system%2Csystem-ui%2C'Segoe UI'%2CHelvetica%2CArial%2Csans-serif !important%3B%0A    color%3A var(--text-primary) !important%3B%0A  %7D%0A  %23mainCommand %7B%0A    background%3A black%3B%0A    width%3A 800px%3B%0A    height%3A 600px%3B%0A    border-radius%3A 10px%3B%0A    animation-name%3A slidein%3B%0A    animation-duration%3A 2s%3B%0A    text-align%3A center%3B%0A    margin%3A auto auto%3B%0A    position%3A fixed%3B%0A    overflow%3A auto%3B%0A    top%3A var(--x-axis%2C 2rem)%3B%0A    left%3A var(--y-axis%2C 2rem)%3B%0A    z-index%3A 100000%3B %0A    box-shadow%3A 5px 10px 18px %23888888%3B%0A    padding-left%3A 2rem%3B%0A    padding-right%3A 2rem%3B%0A  %7D%0A  %23title%2C %23author %7B%0A    color%3A var(--text-primary)%3B%0A    font-family%3A 'Helvetica'%3B%0A    padding%3A 10px%3B%0A  %7D%0A  %23btn1%2C %23btn2%2C %23btn3%2C %23btn4%2C %23btn5%2C %23btn6%2C %23btn7%2C %23btn8%2C %23btn9%2C %23btn10%2C %23gt1%2C %23gt2%2C %23gt3%2C %23gt4%2C %23gt5%2C %23gt6 %7B%0A    appearance%3A none%3B%0A    backface-visibility%3A hidden%3B%0A    background-color%3A %23F82C79%3B%0A    border-radius%3A 8px%3B%0A    border-style%3A none%3B%0A    box-shadow%3A rgba(39%2C 174%2C 96%2C .15) 0 4px 9px%3B%0A    box-sizing%3A border-box%3B%0A    color%3A %23fff%3B%0A    cursor%3A pointer%3B%0A    margin%3A auto auto%3B%0A    font-family%3A Inter%2C-apple-system%2Csystem-ui%2C'Segoe UI'%2CHelvetica%2CArial%2Csans-serif%3B%0A    font-size%3A 16px%3B%0A    font-weight%3A 600%3B%0A    letter-spacing%3A normal%3B%0A    line-height%3A 1.5%3B%0A    outline%3A none%3B%0A    overflow%3A hidden%3B%0A    padding%3A 13px 20px%3B%0A    position%3A relative%3B%0A    text-align%3A center%3B%0A    text-decoration%3A none%3B%0A    transform%3A translate3d(0%2C 0%2C 0)%3B%0A    transition%3A all .3s%3B%0A    user-select%3A none%3B%0A    -webkit-user-select%3A none%3B%0A    touch-action%3A manipulation%3B%0A    vertical-align%3A top%3B%0A    white-space%3A nowrap%3B%0A    margin-right%3A 5px%3B%0A    margin-top%3A 5px%3B%0A  %7D%0A    %23btn1%3Ahover%2C%23btn2%3Ahover%2C%23btn1%3Ahover%2C %23btn3%3Ahover%2C %23btn4%3Ahover%2C %23btn5%3Ahover%2C %23btn6%3Ahover%2C %23btn7%3Ahover%2C %23btn8%3Ahover%2C %23btn9%3Ahover%2C %23btn10%3Ahover%2C %23gt1%3Ahover%2C %23gt2%3Ahover%2C %23gt3%3Ahover%2C %23gt4%3Ahover%2C %23gt5%3Ahover%2C %23gt6%3Ahover %7B%0A      background-color%3A %23E52A70%3B%0A      opacity%3A 1%3B%0A      transform%3A translateY(0)%3B%0A      transition-duration%3A .35s%3B%0A    %7D%0A    %23btn1%3Aactive%2C %23btn2%3Aactive%2C %23btn3%3Aactive%2C %23btn4%3Aactive%2C %23btn5%3Aactive%2C %23btn6%3Aactive%2C %23btn7%3Aactive%2C %23btn8%3Aactive%2C %23btn9%3Aactive%2C %23btn10%3Aactive%2C %23gt1%3Aactive%2C %23gt2%3Aactive%2C %23gt3%3Aactive%2C %23gt4%3Aactive%2C %23gt5%3Aactive%2C %23gt6%3Aactive %7B%0A      transform%3A translateY(2px)%3B%0A      transition-duration%3A .35s%3B%0A    %7D%0A    %40keyframes slidein %7B%0A      0%25 %7B%0A        opacity%3A 0%25%0A      %7D %0A      100%25 %7B%0A        opactiy%3A 100%25%0A      %7D%0A    %7D%0A%60%7D)()%3B)))))

# LumiJS

A bookmarklet is a piece of javascript code that can be run by clicking on a bookmark.

This bookmarklet has hacks, games etc.

go to bookmark.js and copy that code to your bookmarks bar. Its too shlong to put here.

Original credit to crwn.js for some of the code and the idea.



## Games

### Snake

Snake is a classic game where you try to get your snake longer by eating apples.

### Pinball

This is sometimes broken on some websites, try to guess where the ball will go.

### 2048

Combine blocks to get a bigger number.

### The House

Try to survive!

### The Wall

Build walls to trap balls.

### Astroids

Destroy a page with this game!

## Hacks

Tab Cloak - Hides the tab name

History - Spams page views

Themes - Changes the colors

Darkmode - Makes page dark

Notepad - Small notes app

Adblock+ - Stops all ads

Autoclicker - Basic autoclicker

### New commands

Localstorage Viewer - See all localstorage items

Popup Browser - A popup window for any site

## Console Commands

Put crwn infront of any command for it to work.

### Console blue/green

Changes console colors

### custom theme

Allows the addition of custom themes on the page

### new

Gives info on how to create a command

### edit

Allows an edit on the current page

### create cmd

Creates a command

### proxify site

Proxys a website, only works on some blockers

### install pall

Installs a diffrent proxy

### clear cookies

Removes the current cookies of the page

### delete css

Removes all the css of the page

### calc

A basic calculator

### 3d

Makes the website 3D

### about:blank

Creates a new fake page

## New Commands

### help

Shows list of avalible commands

### more

Gives more details for each of the commands - more {command}

### console

Sets the console to a certain color - console {color}

### text

Changes the color of the text in the console - text {color}

### create

Creates a custom command - create {name} {code} {options}

#### create options

##### run - Executes the code immediatly

##### async - Runs code on page load

##### unsave - Does not save the command

##### log - Shows command in pages console

##### redirect {site} - Takes user to another page 

##### popup {site} - Opens popup to another site

##### delay {time} - Waits a certain amount of time

### xray

Shows the code on the pages site

### neon

Makes the page a neon theme

### install Vengeance

Installs a third party hacked client

### !ignore

Ignores the commands, and directly executes any code
