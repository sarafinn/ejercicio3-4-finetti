function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
SoundPlay("musica",true);


}

function Frame__0_1(ID){
StackTrace="Escena 1 Fotograma 1";
Pause();

}

function Frame__1_0(ID){
StackTrace="Escena 2 Fotograma 0";
Stop();


}

function ToggleButton1_OnClick(){
StackTrace="ToggleButton1.Al Hacer Clic";
VideoSetVolume("vladimir",0);
SoundPlay("click",false);
}

function ToggleButton1_OnRelease(){
StackTrace="ToggleButton1.Al Liberar";
VideoSetVolume("vladimir",100);
SoundPlay("click",false);
}

function ToggleButton2_OnClick(){
StackTrace="ToggleButton2.Al Hacer Clic";
VideoPause("vladimir");
SoundPlay("click",false);

}

function ToggleButton2_OnRelease(){
StackTrace="ToggleButton2.Al Liberar";
VideoResume("vladimir");
SoundPlay("click",false);

}

function iralsonido_OnClick(){
StackTrace="ir al sonido.Al Hacer Clic";
GotoSceneName("Escena 1");
SoundPlay("click",false);

}

function ToggleButton3_OnClick(){
StackTrace="ToggleButton3.Al Hacer Clic";
SoundPause("musica");
SoundPlay("click",false);

}

function ToggleButton3_OnRelease(){
StackTrace="ToggleButton3.Al Liberar";
SoundResume("musica");
SoundPlay("click",false);

}

function Button1_OnClick(){
StackTrace="Button1.Al Hacer Clic";
GotoSceneNameAndStop("Escenario menu",5);
SoundPlay("click",false);
}

