#target Illustrator  
  
  
//  script.nome = multiartboards.jsx;  
//  script.descrição = Redimensiona todos os artboards;  
//  script.requirementos = Um documento aberto com artboard;  
//  script.criador = alexandre fernandes (baseado no script do carlos canto // 23/11/17);  
//  script.elegante = false;  
  
if (app.documents.length > 0) {  
  
  
        //alert("more than 0");  
                    var idoc = app.activeDocument;  
  
  
        var titulo = "Redimensionar Artboards";  
  
  
        var largura = Number(Window.prompt ("Coloque a largura do Artboard em cm", 21, titulo));  
        var altura = Number(Window.prompt ("Coloque a altura do Artboard em cm", 29.7, titulo));  
  
  
    for (i=0; i<idoc.artboards.length; i++) {  
        var abBounds = idoc.artboards[i].artboardRect;// esquerda, cima, direita, baixo  
  
  
        var ableft = abBounds[0]; // 0  
        var abtop = abBounds[1]; // 841.89
        var abwidth = abBounds[2] - ableft; // 595.275 // largura
        var abheight = abtop- abBounds[3]; // 0 // altura
          
        var abctrx = abwidth/2+ableft;  
        var abctry = abtop-abheight/2;  
               
        var ableft = abctrx-largura/2*28.347;   
        var abtop = abctry+altura/2*28.347;  
        var abright = abctrx+largura/2*28.347;   
        var abbottom = abctry-altura/2*28.347;  
          
        idoc.artboards[i].artboardRect = [ableft, abtop, abright, abbottom];  
    }  
}  
 else  {  
        alert ("Não há documentos abertos");  
}  