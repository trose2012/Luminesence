javascript:(function()%7Blet%20style%3Ddocument.createElement(%22style%22)%2Ctitle%3Ddocument.createElement(%22h1%22)%2Ctext%3Ddocument.createElement(%22p%22)%2Cmainframe%3Ddocument.createElement(%22div%22)%2Cgameframe%3Ddocument.createElement(%22div%22)%2Clogo%3Ddocument.createElement(%22img%22)%2CtopBar%3Ddocument.createElement(%22div%22)%2CminBar%3Ddocument.createElement(%22div%22)%2Cclose%3Ddocument.createElement(%22button%22)%2Cmin%3Ddocument.createElement(%22button%22)%2Copen%3Ddocument.createElement(%22button%22)%2Cbs1%3Ddocument.createElement(%22button%22)%2Cbs2%3Ddocument.createElement(%22button%22)%2Cbs3%3Ddocument.createElement(%22button%22)%2Cbs4%3Ddocument.createElement(%22button%22)%2Cbs5%3Ddocument.createElement(%22button%22)%2Cbs6%3Ddocument.createElement(%22button%22)%2Cbs7%3Ddocument.createElement(%22button%22)%2Cbs8%3Ddocument.createElement(%22button%22)%2Cbs9%3Ddocument.createElement(%22button%22)%2Cgt1%3Ddocument.createElement(%22button%22)%2Cgt2%3Ddocument.createElement(%22button%22)%2Cgt3%3Ddocument.createElement(%22button%22)%2Cgt4%3Ddocument.createElement(%22button%22)%2Cgt5%3Ddocument.createElement(%22button%22)%2Cgt6%3Ddocument.createElement(%22button%22)%3Bfunction%20dragElement(e)%7Bvar%20n%3D0%2Co%3D0%2Ci%3D0%2Cg%3D0%3Bfunction%20%24(e)%7B(e%3De%7C%7Cwindow.event).preventDefault()%2Ci%3De.clientX%2Cg%3De.clientY%2Cdocument.onmouseup%3Dk%2Cdocument.onmousemove%3D_%7Dfunction%20_(%24)%7B(%24%3D%24%7C%7Cwindow.event).preventDefault()%2Cn%3Di-%24.clientX%2Co%3Dg-%24.clientY%2Ci%3D%24.clientX%2Cg%3D%24.clientY%2Ce.style.top%3De.offsetTop-o%2B%22px%22%2Ce.style.left%3De.offsetLeft-n%2B%22px%22%7Dfunction%20k()%7Bdocument.onmouseup%3Dnull%2Cdocument.onmousemove%3Dnull%7Ddocument.getElementById(e.id%2B%22header%22)%3Fdocument.getElementById(e.id%2B%22header%22).onmousedown%3D%24%3Ae.onmousedown%3D%24%7Dmainframe.id%3D%22mainClient%22%2Cgameframe.id%3D%22gameFrame%22%2CtopBar.id%3D%22topBar%22%2Cclose.id%3D%22close%22%2Cmin.id%3D%22min%22%2Copen.id%3D%22open%22%2CminBar.id%3D%22minBar%22%2Cbs1.id%3D%22btn1%22%2Cbs2.id%3D%22btn2%22%2Cbs3.id%3D%22btn3%22%2Cbs4.id%3D%22btn4%22%2Cbs5.id%3D%22btn5%22%2Cbs6.id%3D%22btn6%22%2Cbs7.id%3D%22btn7%22%2Cbs8.id%3D%22btn8%22%2Cbs9.id%3D%22btn9%22%2Cgt1.id%3D%22gt1%22%2Cgt2.id%3D%22gt2%22%2Cgt3.id%3D%22gt3%22%2Cgt4.id%3D%22gt4%22%2Cgt5.id%3D%22gt5%22%2Cgt6.id%3D%22gt6%22%2Cdocument.body.appendChild(mainframe)%2Cdocument.body.appendChild(minBar)%2Cmainframe.append(topBar%2Ctitle%2Ctext%2Clogo%2Cbs1%2Cbs2%2Cbs3%2Cbs4%2Cbs5%2Cbs6%2Cbs7%2Cbs8)%2Cmainframe.append(style)%2Cmainframe.append(gameframe)%2Cgameframe.append(gt1%2Cgt2%2Cgt3%2Cgt4%2Cgt5%2Cgt6)%2CtopBar.append(close)%2CtopBar.append(min)%2CtopBar.append(open)%2Ctitle.textContent%3D%22Luminesence%22%2Ctext.textContent%3D%22An%20advanced%20hacked%20client.%22%2Cbs1.textContent%3D%22Tab%20Cloak%22%2Cbs2.textContent%3D%22History%22%2Cbs3.textContent%3D%22Themes%22%2Cbs4.textContent%3D%22Darkmode%22%2Cbs5.textContent%3D%22Notepad%22%2Cbs6.textContent%3D%22Adblock%2B%22%2Cbs7.textContent%3D%22Games%22%2Cbs8.textContent%3D%22Console%22%2Cbs9.textContent%3D%22Autoclicker%22%2Cgt1.textContent%3D%22Snake%22%2Cgt2.textContent%3D%22Pinball%22%2Cgt3.textContent%3D%222048%22%2Cgt4.textContent%3D%22The%20House%22%2Cgt5.textContent%3D%22The%20Wall%22%2Cgt6.textContent%3D%22Astroids%22%2CdragElement(document.getElementById(%22mainClient%22))%2Cclose.onclick%3D()%3D%3E%7Bmainframe.style.display%3D%22none%22%7D%2CminBar.style.display%3D%22none%22%2CminBar.innerHTML%3D%22open%22%2Cmin.onclick%3D()%3D%3E%7Bmainframe.style.display%3D%22none%22%2CminBar.style.display%3D%22block%22%7D%2CminBar.onclick%3D()%3D%3E%7Bmainframe.style.display%3D%22block%22%2CminBar.style.display%3D%22none%22%7D%2Copen.onclick%3D()%3D%3E%7B%22100%25%22%3D%3D%3Dmainframe.style.width%3F(mainframe.style.width%3D%22800px%22%2Cmainframe.style.height%3D%22600px%22%2Cmainframe.style.top%3D%222rem%22)%3A(mainframe.style.width%3D%22100%25%22%2Cmainframe.style.height%3D%22100%25%22%2Cmainframe.style.top%3D%220%22%2Cmainframe.style.left%3D%220%22)%7D%2Cbs1.onclick%3D()%3D%3E%7Btext.style.display%3D%22%22%2Ctext.textContent%3D%22Activated%20tab%20cloak%22%2Cdocument.title%3Dprompt(%22Name%20of%20tab%3A%22)%7D%2Cbs2.onclick%3D()%3D%3E%7Btext.style.display%3D%22%22%2Ctext.textContent%3D%22Activated%20Flood%22%3Bjavascript%3Avar%20e%3Dprompt(%22How%20Times%20Do%20You%20Want%20This%20Page%20To%20Show%20Up%20In%20your%20History%3F%22)%3Bdone%3D!1%2Cx%3Dwindow.location.href%3Bfor(var%20n%3D1%3Bn%3C%3De%3Bn%2B%2B)history.pushState(0%2C0%2Cn%3D%3De%3Fx%3An.toString())%2Cn%3D%3De%26%26(done%3D!0)%3B!0%3D%3D%3Ddone%26%26alert(%22Flooding%20Successful!%5Cn%20%22%2Bwindow.location.href%2B%22%20%5CnIs%20Now%20In%20Your%20History%20%22%2Be%2B(1%3D%3De%3F%22%20time.%22%3A%22%20Times.%22))%7D%2Cbs3.onclick%3D()%3D%3E%7Blet%20e%3D%7Bdark%3A%22light%22%2Clight%3A%22solar%22%2Csolar%3A%22dark%22%7D%2Cn%3DlocalStorage.getItem(%22theme%22)%7C%7C(tmp%3DObject.keys(e)%5B0%5D%2ClocalStorage.setItem(%22theme%22%2Ctmp)%2Ctmp)%2Co%3Dmainframe.classList%3Bfunction%20i()%7Blet%20n%3DlocalStorage.getItem(%22theme%22)%2Ci%3De%5Bn%5D%3Bo.replace(n%2Ci)%2ClocalStorage.setItem(%22theme%22%2Ci)%7Do.add(n)%2Ci()%7D%2Cbs4.onclick%3D()%3D%3E%7Bjavascript%3A!function()%7Bvar%20e%2Cn%3D%22*%20%7B%20background%3A%20black%20!important%3B%20color%3A%20%23C0C0C0%20!important%3B%20line-height%3A1.7em%20!important%7D%20%3Alink%2C%20%3Alink%20*%20%7B%20color%3A%20%230099FF%20!important%20%7D%20%3Avisited%2C%20%3Avisited%20*%20%7B%20color%3A%20%236666CC%20!important%20%7D%22%3Bdocument.createStyleSheet%3Fdocument.createStyleSheet(%22javascript%3A'%22%2Bn%2B%22'%22)%3A((e%3Ddocument.createElement(%22link%22)).rel%3D%22stylesheet%22%2Ce.href%3D%22data%3Atext%2Fcss%2C%22%2Bescape(n)%2Cdocument.getElementsByTagName(%22head%22)%5B0%5D.appendChild(e))%7D()%7D%2Cbs5.onclick%3D()%3D%3E%7Bjavascript%3A!function%20hi()%7Bvar%20waitCallback%2CparentID%3D%22a3q_parent%22%2CdID%3D%22a3q_customNotes%22%2CbuttonID%3D%22a3q_close_button%22%2Crun%3D%22a3q_run_button%22%2CsaveThrottleSpeed%3D100%2ClastSave%3DDate.now()%3Bfunction%20a3q_Save(e)%7Be%3De%7C%7C!1%2CclearTimeout(waitCallback)%2Ce%7C%7CDate.now()-lastSave%3E%3DsaveThrottleSpeed%3F(lastSave%3DDate.now()%2ClocalStorage.setItem(%22a3q_note%22%2Ca3q_GetContents()))%3AwaitCallback%3DsetTimeout(function()%7Ba3q_Save()%7D%2CsaveThrottleSpeed-Date.now())%7Dfunction%20a3q_Load()%7Breturn%20localStorage.getItem(%22a3q_note%22)%7C%7C%22%22%7Dfunction%20a3q_GetContents()%7Breturn%20document.getElementById(dID).innerHTML%7Dfunction%20a3q_Unload()%7Ba3q_Save(!0)%2Cd.removeEventListener(%22onkeyup%22%2Ca3q_Save)%2Cd.parentNode.removeChild(d)%2Ce.removeEventListener(%22onkeyup%22%2Ca3q_Save)%2Ce.parentNode.removeChild(e)%2Cc.removeEventListener(%22onclick%22%2Cc.onclick)%2Cc.parentNode.removeChild(c)%7Dvar%20d%3Ddocument.getElementById(dID)%2Cc%3Ddocument.getElementById(buttonID)%2Ce%3Ddocument.getElementById(run)%3Bif(d)a3q_Unload()%3Belse%7Bvar%20d%3Ddocument.createElement(%22textarea%22)%3Bd.id%3DdID%2Cd.innerHTML%3Da3q_Load()%2Cd.style.backgroundColor%3D%22%23333%22%2Cd.style.color%3D%22%23ccc%22%2Cd.style.border%3D%221px%20solid%20%23ccc%22%2Cd.style.position%3D%22fixed%22%2Cd.style.width%3D%2220%25%22%2Cd.style.height%3D%2220%25%22%2Cd.style.right%3D%222%25%22%2Cd.style.bottom%3D%222%25%22%2Cd.style.padding%3D%222px%22%2Cd.style.zIndex%3D1e4%2Cd.contentEditable%3D!0%2Cdocument.body.appendChild(d)%2Cd.focus()%3Bvar%20lastRun%3DDate.now()%3Bd.onkeyup%3Da3q_Save%3Bvar%20c%3Ddocument.createElement(%22button%22)%2Ce%3Ddocument.createElement(%22button%22)%3Bc.style.position%3D%22fixed%22%2Cc.id%3DbuttonID%2Cc.style.zIndex%3D1e4%2Cc.style.bottom%3D%222%25%22%2Cc.style.right%3D%222%25%22%2Cc.innerHTML%3D%22Close%22%2Cc.style.backgroundColor%3D%22%23333%22%2Cc.style.color%3D%22%23ccc%22%2Cc.onclick%3Dfunction()%7Ba3q_Unload()%7D%2Cdocument.body.appendChild(e)%2Ce.style.position%3D%22fixed%22%2Ce.style.float%3D%22left%22%2Ce.id%3Drun%2Ce.style.zIndex%3D1e4%2Ce.style.bottom%3D%222%25%22%2Ce.style.left%3D%2278%25%22%2Ce.innerHTML%3D%22Run%22%2Ce.style.backgroundColor%3D%22%23333%22%2Ce.style.color%3D%22%23ccc%22%2Ce.onclick%3Dfunction()%7Bvar%20a3q_note%3Ddocument.getElementById(%22a3q_customNotes%22).value%3B!0%3D%3Da3q_note%26%26(document.getElementById(%22a3q_customNotes%22).style.color%3D%22red%22%2Ca3q_note%3D%22Please%20enter%20a%20proper%20value%22)%2Ceval(a3q_note)%7D%2Cdocument.body.appendChild(c)%7D%7D()%7D%2Cbs6.onclick%3D()%3D%3E%7B%7D%2Cgameframe.style.display%3D%22none%22%2Cbs7.onclick%3D()%3D%3E%7B%22block%22%3D%3D%3Dgameframe.style.display%3Fgameframe.style.display%3D%22none%22%3Agameframe.style.display%3D%22block%22%7D%2Cbs8.onclick%3D()%3D%3E%7Blet%20stylething%3Ddocument.createElement(%22style%22)%3Bdocument.head.appendChild(stylething)%3Blet%20mainCommand%3Ddocument.createElement(%22div%22)%3BmainCommand.id%3D%22mainCommand%22%2Cdocument.body.appendChild(mainCommand)%2CmainCommand.appendChild(style)%3Blet%20goback%3Ddocument.createElement(%22button%22)%3Bgoback.id%3D%22goback%22%3Blet%20console%3Ddocument.createElement(%22input%22)%2Cbox%3Ddocument.createElement(%22div%22)%3Bconsole.id%3D%22console%22%2Cbox.id%3D%22box%22%2CmainCommand.appendChild(console)%2CmainCommand.appendChild(box)%2Cconsole.placeholder%3D%22Crwn%20help%22%2Cgoback.style.display%3D%22%22%2Cgoback.textContent%3D%22Go%20back%22%2CmainCommand.appendChild(goback)%2Cgoback.onclick%3D()%3D%3E%7BmainCommand.style.display%3D%22none%22%7D%2Cstylething.textContent%3D%60%0A%40import%20url('https%3A%2F%2Ffonts.googleapis.com%2Fcss2%3Ffamily%3DOpen%2BSans%3Awght%40300%26display%3Dswap')%3B%0A%23console%20%7B%0A%20%20width%3A%20250px%20!important%3B%0A%20%20border-style%3A%20none%3B%0A%20%20height%3A%2050px%20!important%3B%0A%20%20background-color%3A%20black%3B%0A%20%20color%3A%20green%3B%0A%20%20font-family%3A%20'Open%20Sans'%3B%0A%20%20margin%3A%20auto%20auto%3B%0A%7D%0A%23console%3A%3Aplaceholder%20%7B%0A%20%20color%3A%20green%3B%0A%20%20font-family%3A%20'Open%20Sans'%3B%0A%7D%0A%23goback%20%7B%0Az-index%3A%20999999%20!important%3B%0A%7D%0A%23box%20%7B%0A%20%20color%3A%20green%3B%0A%20%20width%3A%20250px%20!important%20%3B%0A%20%20height%3A%20250px%20!important%3B%0A%20%20background-color%3A%20black%3B%0A%20%20margin%3A%20auto%20auto%3B%0A%20%20padding%3A%205px%3B%0A%20%20font-family%3A%20'Open%20Sans'%3B%0A%20%20border-style%3A%20none%3B%0A%20overflow-y%3A%20scroll%3B%20%0A%7D%0A%60%2Cconsole.addEventListener(%22keyup%22%2Cfunction(event)%7Bif(13%3D%3D%3Devent.keyCode)%7Bevent.preventDefault()%3Bvar%20extra%3D%22%22%3Blet%20output%3Ddocument.createElement(%22p%22)%3Bif(output.textContent%3Dconsole.value%2Cbox.appendChild(output)%2Cconsole.value.includes(%22crwn%22)%3Foutput.value%3Dconsole.value%3A(output.textContent%3D%22Unknown%20command%20~%20%22%2Bconsole.value%2B%22~%22%2Coutput.style.color%3D%22red%22)%2C%22crwn%20console%20blue%22%3D%3Dconsole.value)output.textContent%3D%22Changed%20console%20theme%20to%20blue%22%2Cbox.style.backgroundColor%3D%22blue%22%3Belse%20if(%22crwn%20console%20green%22%3D%3Dconsole.value)output.value%3Dconsole.value%2Coutput.textContent%3D%22Changed%20console%20theme%20to%20green%22%2Cbox.style.backgroundColor%3D%22green%22%3Belse%20if(%22crwn%20custom%20theme%22%3D%3Dconsole.value)%7Blet%20bozo%3Dprompt(%22Enter%20Image%20URL%22)%3Boutput.value%3Dconsole.value%2Cdocument.body.style.backgroundImage%3D%22url(%22%2Bbozo%2B%22)%22%2Coutput.textContent%3D%22Added%20custom%20theme%20to%20page%22%7Delse%20if(%22crwn%20new%22%3D%3Dconsole.value)output.textContent%3D%22if%20(console.value%20%3D%3D%20~command-%20name-here~%20%7B%20code%20here%20%7D%20else%20%7Boutput.textContent%20~Unknown%20command~%20'%20%2B%20console.value%20%2B%20'''%20output.style.color%20%3D%20'red'%7D%22%3Belse%20if(%22crwn%20edit%22%3D%3Dconsole.value)%7Bjavascript%3Adocument.body.contentEditable%3D!0%3Bdocument.designMode%3D%22on%22%2Coutput.textContent%3D%22Edit%20Mode%20turned%20on.%22%7Delse%20if(%22crwn%20create%20cmd%22%3D%3Dconsole.value)%7Blet%20name%3Dprompt(%22Name%20your%20command%22)%2Cprefix%3D%22crwn%22%2Cfunc%3Dprompt(%22Paste%20your%20JS%20code.%20Do%20crwn%20new%20for%20the%20basic%20command%20creation%20guide.%22)%2Cstore%3Dprefix%2B%22%20%22%2Bname%3Bextra%3Dstore%2Ceval(func)%2Cwindow.localStorage.setItem(%22store%22%2Cstore.toString())%2Cwindow.localStorage.setItem(%22func%22%2Cfunc.toString())%2Coutput.textContent%3D%22Executed%20%22%2Bstore%7Delse%20if(%22crwn%20proxify%20site%22%3D%3Dconsole.value)%7Blet%20proxify%3Dprompt(%22Enter%20site%20URL%22)%3Bvar%20code2%3D%22%20width%3D100%25%20height%3D100%25%3E%22%2CproxyDomain%3D%22https%3A%2F%2Fpalladium-2.anirudhiscool.repl.co%2Fservice%2Fgateway%2F%3Furl%3D%22%2CcodeIP3%3Dcode1.concat(proxyDomain).concat(proxify).concat(code2)%3Bdocument.write(codeIP3)%7Delse%20if(%22crwn%20install%20pall%22%3D%3Dconsole.value)output.textContent%3D%22Downloaded%20palladium%20proxy.%20Using%20repl.co%20domain.%22%3Belse%20if(%22crwn%203d%22%3D%3Dconsole.value)output.textContent%3D%223D%20ifyed!%22%3Belse%20if(%22crwn%20delete%20css%22%3D%3Dconsole.value)%7Bmainframe.style.display%3D%22none%22%3Bjavascript%3A!function()%7Bvar%20e%2Cn%2Co%3Ddocument.styleSheets%3Bfor(e%3D0%2Cn%3Do.length%3Be%3Cn%3Be%2B%2B)o%5Be%5D.disabled%3D!0%7D()%7Delse%20if(%22crwn%20calc%22%3D%3Dconsole.value)%7Bjavascript%3Aeval(%22function%20calc()%7B_o%3Dprompt(_t%2C_z)%3Bif(_o!%3D''%26%26_o!%3Dnull%26%26_o.toUpperCase()%3D%3D_o.toLowerCase())_z%3Deval(_o)%3B%7D%22)%3Bfor(_t%3D%22JAVASCRIPTER.NET%20Calculator%20-%20Input%20the%20expression%20to%20be%20calculated%3A%22%2C_z%3D%22%22%2Ccalc()%3B%22%22!%3D_o%26%26null!%3D_o%26%26_o.toUpperCase()%3D%3D_o.toLowerCase()%3B)calc()%7Delse%20if(%22crwn%20help%22%3D%3Dconsole.value)output.textContent%3D%60Put%20crwn%20infront%20of%20any%20command%3A%20console%20green%2Fblue%2C%20custom%20theme%2C%20new%2C%20edit%2C%20create%20cmd%2C%20proxify%20site%2C%20install%20pall%2C%20clear%20cookies%2C%20delete%20css%2C%20calc%2C%203d%2C%20about%3Ablank%2C%20%24%7BlocalStorage.getItem(%22store%22)%7D%60%3Belse%20if(%22crwn%20clear%20cookies%22%3D%3Dconsole.value)%7Boutput.textContent%3D%22Cookies%20cleared!%22%3Bjavascript%3Adocument.cookie.split(%22%3B%22).forEach(function(e)%7Bdocument.cookie%3De.replace(%2F%5E%20%2B%2F%2C%22%22).replace(%2F%3D.*%2F%2C%22%3D%3Bexpires%3D%22%2Bnew%20Date().toUTCString()%2B%22%3Bpath%3D%2F%22)%7D)%3Bwindow.localStorage.clear()%7Delse%22crwn%20about%3Ablank%22%3D%3Dconsole.value%3Flocation.href%3D%22https%3A%2F%2F%22%2Bprompt(%22Link%20adress%3A%22)%3Aconsole.value%3D%3DlocalStorage.getItem(%22store%22)%3Feval(window.localStorage.getItem(%22func%22))%3A(output.textContent%3D%22Unknown%20command%20%20%22%2Bconsole.value%2Coutput.style.color%3D%22red%22)%7D%7D)%7D%2Cbs9.onclick%3D()%3D%3E%7Bjavascript%3Avar%20e%3D1%3Bvar%20n%3Ddocument.createElement(%22style%22)%3Bfunction%20o(e)%7Be.isTrusted%26%26(e.target.classList.contains(%22auto-clicker-target%22)%3Fe.target.classList.remove(%22auto-clicker-target%22)%3Ae.target.classList.add(%22auto-clicker-target%22)%2Cdocument.body.removeChild(n)%2Cdocument.body.removeEventListener(%22click%22%2Co)%2Ce.preventDefault()%2Ci(e.target))%7Dfunction%20i(n)%7Bn.classList.contains(%22auto-clicker-target%22)%26%26(n.click()%2CsetTimeout(function()%7Bi(n)%7D%2Ce))%7Dn.innerHTML%3D%22*%7Bcursor%3A%20crosshair%20!important%3B%7D%22%2Cdocument.body.appendChild(n)%2Cdocument.body.addEventListener(%22click%22%2Co%2C0)%7D%2Cgt1.onclick%3D()%3D%3E%7Bjavascript%3AQ%3D64%3Bfor(m%3Db%3DQ*Q%2Ca%3D%5BP%3Dl%3Du%3Dd%3Dp%3DS%3Dw%3D0%5D%2Cu%3D89%2Cf%3D(h%3Dj%3Dt%3D(b%2BQ)%2F2)-1%2C(B%3D(D%3Ddocument).body).appendChild(x%3DD.createElement(%22p%22))%2C(X%3Dx.style).position%3D%22fixed%22%2CX.left%3DX.top%3D0%2CX.background%3D%22%23FFF%22%2Cx.innerHTML%3D%22%3Cp%3E%3C%2Fp%3E%3Ccanvas%3E%22%2Cv%3D(s%3Dx.childNodes)%5B0%5D%2C(s%3Ds%5B1%5D).width%3Ds.height%3D5*Q%2Cc%3Ds.getContext(%222d%22)%2Conkeydown%3Donblur%3DF%3Dfunction(e%2Cn)%7Breturn%20n%3Fa%5Bf%5D%3F(w%2B%3Dm%2Cf%3DMath.random(l%2B%3D8)*(R%3DQ-2)*R%7C(u%3D0)%2CF(f%2B%3DQ%2B1%2B2*(f%2FR%7C0)%2Cn))%3AF(f)%3A0%3Ee%3F(l%3F--l%3A(y%3Dt%2Ct%3Da%5Bt%5D-2%2CF(y))%2CS%2B%3D(w*%3D.8)%2F4%2Cm%3D999%2F(u%2B%2B%2B10)%2Ca%5Bh%2B%3D%5B-1%2C-Q%2C1%2CQ%5D%5Bd%3Dp%5D%5D%3FB.removeChild(x%2Calert(%22Game%20Over%22))%3A(F(h)%2CF(e%2Cj%3Dh)%2Cv.innerHTML%3DP%3F(setTimeout(F%2C50%2Ce%2C0)%2C0%7CS)%3A%22Press%20P%22))%3A-e%3F(y%3D(a%5Be%5D%3De%3CQ%7Ce%3E%3DQ*Q-Q%7C!(e%25Q)%7Ce%25Q%3D%3DQ-1%7C2*(e%3D%3Dh))%2B(e%3D%3Df)%2Ce%3D%3Dh%26%26(a%5Bj%5D%3D2%2Bh)%2Cc.fillStyle%3D%22hsl(%22%2B99*!a%5Be%5D%2B%22%2C%22%2B2*m%2B%22%25%2C%22%2B50*y%2B%22%25)%22%2Cc.fillRect(e%25Q*5%2C5*(e%2FQ%7C0)%2C5%2C5))%3AisNaN(y%3De.keyCode-37)%7C43%3D%3Dy%3F(P%3Dy%26%26!P)%26%26F(-1)%3Ap%3D!P%7C-4%26y%7C!(2%5Ey%5Ed)%3Fp%3Ay%2C!1%7D%3B--b%3BF(b))%3BF(-1)%7D%2Cgt2.onclick%3D()%3D%3E%7Bjavascript%3A!function()%7Bvar%20e%3Ddocument.body.appendChild(document.createElement(%22script%22))%3Be.onerror%3Dfunction()%7Balert(%22Sorry%2C%20the%20script%20could%20not%20be%20loaded.%22)%7D%2Ce.src%3D%22https%3A%2F%2Frawgit.com%2FKrazete%2Fbookmarklets%2Fmaster%2Flupire.js%22%7D()%7D%2Cgt3.onclick%3D()%3D%3E%7Bjavascript%3A(e%3D%3E%7Bvar%20n%3Ddocument.createElement(e)%3Bn.type%3D%22text%2Fjava%22%2Be%2Cn.src%3D%22https%3A%2F%2Fsheeptester.github.io%2Fjavascripts%2F2048.js%22%2Cdocument.body.appendChild(n)%7D)(%22script%22)%7D%2Cgt4.onclick%3D()%3D%3E%7Bjavascript%3Avar%20e%3Ddocument.createElement(%22script%22)%3Be.type%3D%22text%2Fjavascript%22%2Ce.src%3D%22https%3A%2F%2Fsheeptester.github.io%2Fthingkingland%2Fbookmarklets%2FtheHouse.js%22%2Cdocument.body.appendChild(e)%7D%2Cgt5.onclick%3D()%3D%3E%7Bjavascript%3At%3Ddocument.title%3Bdocument.title%3D%22Loading...%22%2C(r%3Dnew%20XMLHttpRequest).onload%3Dfunction(e)%7Beval(e.currentTarget.responseText)%7D%2Cr.open(%22GET%22%2C%22https%3A%2F%2Fplainsightcollection.github.io%2Fweb%2Fwallball%2Fldr.js%22%2C!0)%2Cr.send()%7D%2Cgt6.onclick%3D()%3D%3E%7Bjavascript%3Avar%20e%3Ddocument.createElement(%22script%22)%3Be.type%3D%22text%2Fjavascript%22%2Ce.onerror%3Dfunction(e)%7Balert(%22Failed%20to%20load%20the%20script.%20The%20site's%20Content%20Security%20Policy%20might%20be%20blocking%20it.%20Feel%20free%20to%20try%20again.%22)%7D%2Cdocument.body.appendChild(e)%2Ce.src%3D%22https%3A%2F%2Fblog.roysolberg.com%2Fjs%2Fdom2.min.js%22%7D%2Cstyle.textContent%3D%60%0A%3Aroot%20%7B%0A%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20font-family%3A%20'Open%20Sans'%3B%0A%20%20%20%20--text-primary%3A%20%23b6b6b6%3B%0A%20%20%20%20--text-secondary%3A%20%23ececec%3B%0A%20%20%20%20--bg-primary%3A%20%2323232e%3B%0A%20%20%20%20--bg-secondary%3A%20%23141418%3B%0A%20%20%20%20--transition-speed%3A%20600ms%3B%0A%20%20%7D%0A.dark%20%7B%0A%20%20%20%20--text-primary%3A%20%23b6b6b6%3B%0A%20%20%20%20--text-secondary%3A%20%23ececec%3B%0A%20%20%20%20--bg-primary%3A%20%2323232e%3B%0A%20%20%20%20--bg-secondary%3A%20%23141418%3B%0A%20%20%20%20color%3A%20lightgray%3B%0A%20%20%20%20background-color%3A%20%231f2223%3B%0A%20%20%7D%0A%20%20%0A%20%20.light%20%7B%0A%20%20%20%20--text-primary%3A%20%231f1f1f%3B%0A%20%20%20%20--text-secondary%3A%20%23000000%3B%0A%20%20%20%20--bg-primary%3A%20%23ffffff%3B%0A%20%20%20%20--bg-secondary%3A%20%23e4e4e4%3B%0A%20%20%20%20color%3A%20black%3B%0A%20%20%20%20background-color%3A%20lightgray%3B%0A%20%20%7D%0A%20%20%0A%20%20.solar%20%7B%0A%20%20%20%20--text-primary%3A%20%23576e75%3B%0A%20%20%20%20--text-secondary%3A%20%2335535c%3B%0A%20%20%20%20--bg-primary%3A%20%23e6fafd%3B%0A%20%20%20%20--bg-secondary%3A%20%23fefefe%3B%0A%20%20%20%20color%3A%20black%3B%0A%20%20%7D%0A%23close%20%7B%0A%20%20%20%20background%3A%20%23FF5D5B%3B%0A%20%20%20%20border%3A%204px%20solid%20%23CF544D%3B%0A%20%20%20%20border-radius%3A%20100%25%3B%0A%20%20%20%20max-height%3A%2010px%3B%0A%20%20%20%20right%3A%2045px%3B%0A%20%20%20%20padding%3A%203px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%7D%0A%23close%20%3Abefore%2C%20%23close%20%3Aafter%20%7B%0A%20%20%20%20background%3A%20%23460100%3B%0A%7D%0A%23min%20%7B%0A%20%20%20%20background%3A%20%23FFBB39%3B%0A%20%20%20%20border%3A%204px%20solid%20%23CFA64F%3B%0A%20%20%20%20border-radius%3A%20100%25%3B%0A%20%20%20%20max-height%3A%2010px%3B%0A%20%20%20%20right%3A%2025px%3B%0A%20%20%20%20padding%3A%203px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%7D%0A%23min%20%3Abefore%2C%20%23min%20%3Aafter%20%7B%0A%20%20%20%20background%3A%20%23460100%3B%0A%7D%0A%23open%20%7B%0A%20%20%20%20background%3A%20%2300CD4F%3B%0A%20%20%20%20border%3A%204px%20solid%20%230EA642%3B%0A%20%20%20%20border-radius%3A%20100%25%3B%0A%20%20%20%20max-height%3A%2010px%3B%0A%20%20%20%20right%3A%205px%3B%0A%20%20%20%20padding%3A%203px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%7D%0A%23open%20%3Abefore%2C%20%23open%20%3Aafter%20%7B%0A%20%20%20%20background%3A%20%23024D0F%3B%0A%7D%0A%23gameFrame%20%7B%0A%20%20%20%20width%3A%20800px%3B%0A%20%20%20%20height%3A%20600px%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%0A%7D%0A%23topBar%20%7B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20background%3A%20linear-gradient(90deg%2C%20rgba(247%2C247%2C247%2C0.8043811274509804)%200%25%2C%20rgba(237%2C237%2C237%2C0.7539609593837535)%2044%25%2C%20rgba(210%2C210%2C210%2C0.7007396708683473)%20100%25)%3B%20%20%20%20width%3A%20800px%3B%0A%20%20%20%20z-index%3A%20100002%3B%0A%20%20%20%20height%3A%2015px%3B%0A%20%20%20%20cursor%3A%20move%3B%0A%20%20%20%20border-radius%3A%2015px%3B%0A%20%20%20%20margin-top%3A%205px%3B%0A%20%20%20%20margin-bottom%3A%2010px%3B%0A%20%20%20%20box-shadow%3A%20rgba(149%2C%20157%2C%20165%2C%200.2)%200px%208px%2024px%3B%0A%7D%0A%23minBar%20%7B%0A%20%20%20%20bottom%3A%20-5px%3B%0A%20%20%20%20left%3A%2050px%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20width%3A%20250px%3B%0A%20%20%20%20height%3A%2025px%3B%0A%20%20%20%20box-shadow%3A%20rgba(60%2C%2064%2C%2067%2C%200.3)%200px%201px%202px%200px%2C%20rgba(60%2C%2064%2C%2067%2C%200.15)%200px%202px%206px%202px%3B%0A%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20z-index%3A%2020%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20font-family%3A%20Inter%2C-apple-system%2Csystem-ui%2C'Segoe%20UI'%2CHelvetica%2CArial%2Csans-serif%3B%0A%20%20%20%20background%3A%20rgb(247%2C247%2C247)%3B%0A%20%20%20%20background%3A%20linear-gradient(90deg%2C%20rgba(247%2C247%2C247%2C0.8043811274509804)%200%25%2C%20rgba(237%2C237%2C237%2C0.7539609593837535)%2044%25%2C%20rgba(210%2C210%2C210%2C0.7007396708683473)%20100%25)%3B%0A%20%20%20%20animation-name%3A%20slidein%3B%0A%20%20%20%20animation-duration%3A%201s%3B%0A%7D%0A%23gameFrame%20%7B%0A%0A%7D%0A%23mainClient%20%7B%0A%20%20%20%20background%3A%20linear-gradient(143deg%2C%20rgba(2%2C0%2C36%2C1)%200%25%2C%20rgba(67%2C124%2C208%2C1)%200%25%2C%20rgba(73%2C224%2C255%2C1)%20100%25)%3B%0A%20%20%20%20width%3A%20800px%3B%0A%20%20%20%20height%3A%20600px%3B%0A%20%20%20%20border-radius%3A%2010px%3B%0A%20%20%20%20animation-name%3A%20slidein%3B%0A%20%20%20%20animation-duration%3A%202s%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20margin%3A%20auto%20auto%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20overflow%3A%20auto%3B%0A%20%20%20%20top%3A%202rem%3B%0A%20%20%20%20z-index%3A%2010000%3B%20%0A%20%20%20%20box-shadow%3A%205px%2010px%2018px%20%23888888%3B%0A%20%20%20%20padding-left%3A%202rem%3B%0A%20%20%20%20padding-right%3A%202rem%3B%0A%20%20%20%20font-family%3A%20Inter%2C-apple-system%2Csystem-ui%2C'Segoe%20UI'%2CHelvetica%2CArial%2Csans-serif%3B%0A%20%20%20%20color%3A%20white%3B%0A%20%20%7D%0A%20%20%23mainCommand%20%7B%0A%20%20%20%20background%3A%20black%3B%0A%20%20%20%20width%3A%20800px%3B%0A%20%20%20%20height%3A%20600px%3B%0A%20%20%20%20border-radius%3A%2010px%3B%0A%20%20%20%20animation-name%3A%20slidein%3B%0A%20%20%20%20animation-duration%3A%202s%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20margin%3A%20auto%20auto%3B%0A%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20overflow%3A%20auto%3B%0A%20%20%20%20top%3A%202rem%3B%0A%20%20%20%20z-index%3A%20100000%3B%20%0A%20%20%20%20box-shadow%3A%205px%2010px%2018px%20%23888888%3B%0A%20%20%20%20padding-left%3A%202rem%3B%0A%20%20%20%20padding-right%3A%202rem%3B%0A%20%20%7D%0A%20%20%23title%2C%20%23author%20%7B%0A%20%20%20%20color%3A%20white%3B%0A%20%20%20%20font-family%3A%20'Helvetica'%3B%0A%20%20%20%20padding%3A%2010px%3B%0A%20%20%7D%0A%20%20%23btn1%2C%20%23btn2%2C%20%23btn3%2C%20%23btn4%2C%20%23btn5%2C%20%23btn6%2C%20%23btn7%2C%20%23btn8%2C%20%23btn9%2C%20%23btn10%2C%20%23gt1%2C%20%23gt2%2C%20%23gt3%2C%20%23gt4%2C%20%23gt5%2C%20%23gt6%20%7B%0A%20%20%20%20appearance%3A%20none%3B%0A%20%20%20%20backface-visibility%3A%20hidden%3B%0A%20%20%20%20background-color%3A%20%23F82C79%3B%0A%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20border-style%3A%20none%3B%0A%20%20%20%20box-shadow%3A%20rgba(39%2C%20174%2C%2096%2C%20.15)%200%204px%209px%3B%0A%20%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20margin%3A%20auto%20auto%3B%0A%20%20%20%20font-family%3A%20Inter%2C-apple-system%2Csystem-ui%2C'Segoe%20UI'%2CHelvetica%2CArial%2Csans-serif%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20font-weight%3A%20600%3B%0A%20%20%20%20letter-spacing%3A%20normal%3B%0A%20%20%20%20line-height%3A%201.5%3B%0A%20%20%20%20outline%3A%20none%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20padding%3A%2013px%2020px%3B%0A%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20text-decoration%3A%20none%3B%0A%20%20%20%20transform%3A%20translate3d(0%2C%200%2C%200)%3B%0A%20%20%20%20transition%3A%20all%20.3s%3B%0A%20%20%20%20user-select%3A%20none%3B%0A%20%20%20%20-webkit-user-select%3A%20none%3B%0A%20%20%20%20touch-action%3A%20manipulation%3B%0A%20%20%20%20vertical-align%3A%20top%3B%0A%20%20%20%20white-space%3A%20nowrap%3B%0A%20%20%20%20margin-right%3A%205px%3B%0A%20%20%20%20margin-top%3A%205px%3B%0A%20%20%7D%0A%20%20%20%20%23btn1%3Ahover%2C%23btn2%3Ahover%2C%23btn1%3Ahover%2C%20%23btn3%3Ahover%2C%20%23btn4%3Ahover%2C%20%23btn5%3Ahover%2C%20%23btn6%3Ahover%2C%20%23btn7%3Ahover%2C%20%23btn8%3Ahover%2C%20%23btn9%3Ahover%2C%20%23btn10%3Ahover%2C%20%23gt1%3Ahover%2C%20%23gt2%3Ahover%2C%20%23gt3%3Ahover%2C%20%23gt4%3Ahover%2C%20%23gt5%3Ahover%2C%20%23gt6%3Ahover%20%7B%0A%20%20%20%20%20%20background-color%3A%20E52A70%3B%0A%20%20%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20%20%20transform%3A%20translateY(0)%3B%0A%20%20%20%20%20%20transition-duration%3A%20.35s%3B%0A%20%20%20%20%7D%0A%20%20%20%20%23btn1%3Aactive%2C%20%23btn2%3Aactive%2C%20%23btn3%3Aactive%2C%20%23btn4%3Aactive%2C%20%23btn5%3Aactive%2C%20%23btn6%3Aactive%2C%20%237btn%3Aactive%2C%20%23btn8%3Aactive%2C%20%23btn9%3Aactive%2C%20%23btn10%3Aactive%2C%20%23gt1%3Aactive%2C%20%23gt2%3Aactive%2C%20%23gt3%3Aactive%2C%20%23gt4%3Aactive%2C%20%23gt5%3Aactive%2C%20%23gt6%3Aactive%20%7B%0A%20%20%20%20%20%20transform%3A%20translateY(2px)%3B%0A%20%20%20%20%20%20transition-duration%3A%20.35s%3B%0A%20%20%20%20%7D%0A%20%20%20%20%40keyframes%20slidein%20%7B%0A%20%20%20%20%20%200%25%20%7B%0A%20%20%20%20%20%20%20%20opacity%3A%200%25%0A%20%20%20%20%20%20%7D%20%0A%20%20%20%20%20%20100%25%20%7B%0A%20%20%20%20%20%20%20%20opactiy%3A%20100%25%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%60%3B%7D)()%3B
