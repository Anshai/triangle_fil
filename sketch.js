let numOfCircles = 0;
let x = [];
let y = [];
let i, limit, temp;

function setup() {
  createCanvas(1000,800);
  background('#ccc');

}

function draw() {

}

function mousePressed(){
  if(numOfCircles < 3){
    fill('white');
    circle(mouseX,mouseY,20);
    fill('black');
    circle(mouseX,mouseY,1);
    x.push(mouseX);
    y.push(mouseY);
    numOfCircles++;
    print(x, y);

      switch(numOfCircles){
        case 2 :
          // draw line between firts two coordinates
          line(x[0],y[0],x[1],y[1]);
        break;

        case 3 :

		 

	  		 if((y[1] < y[2]) && (x[2] < x[0]) && (x[1] < x[0])){
			 	temp = y[1];
			 	y[1] = y[2];
				y[2] = temp;

				temp = x[1];
				x[1] = x[2];
				x[2] = temp;
			 }

			 if(((x[0] > x[2]) && (x[0] < x[1])) && (y[2] < y[1])) {
			 	temp = y[1];
			 	y[1] = y[2];
				y[2] = temp;

				temp = x[1];
				x[1] = x[2];
				x[2] = temp;
			 }
			 
			 if((x[0] < x[1] && x[0] > x[2]) && (y[1] < y[2])){
			 	temp = y[1];
			 	y[1] = y[2];
				y[2] = temp;

				temp = x[1];
				x[1] = x[2];
				x[2] = temp;
			 }
				
			 if((x[0] < x[1] && x[0] < x[2]) && x[1] > x[2]){
			 	temp = y[1];
			 	y[1] = y[2];
				y[2] = temp;

				temp = x[1];
				x[1] = x[2];
				x[2] = temp;
			 }
				      
	  		 // draw the remaining two lines
          line(x[1],y[1],x[2],y[2]);
          line(x[0],y[0],x[2],y[2]);
          
          let l_x1 = x[0], l_y1 = y[0];
          let l_x2 = x[1], l_y2 = y[1];
          let l_x3 = x[2], l_y3 = y[2];

          //declaring dynamic variables based on coordinates
          d_x2 = l_x1;
          d_x1 = l_x1;

          d2_x1 = l_x2;
          d2_y2 = l_y2;
          d2_y1 = l_y2;
          d3_y2 = l_y3;
          d3_y1 = l_y3;
			 d4_x3 = l_x3;
			 d4_y2 = l_y3;         

			 if((y[0] < y[1]) && (y[0] < y[2])){
				if((x[2] > x[1]) && (y[1] > y[2])){
					if(y[2] < y[1]){
            		lim = y[2]
          		} else {
            		lim = y[1];
          		}
                       
          		for(i = y[0]; i < lim; i++){
              		line(d_x1,l_y1,d_x2,l_y1);
              		l_y1++;
              		d_x2+=(x[2]-x[0])/(y[2]-y[0]);
              		d_x1-=(x[0]-x[1])/(y[1]-y[0]);
              		last_length = d_x2;
          		}

					for(i = x[2];i > d_x1;i--){
						if(i > x[1]){
							line(d4_x3,l_y3,d4_x3,d4_y2);
							d4_x3--;
							d4_y2+= (y[1]-y[2])/(x[2]-x[1]);	
						} else {
							line(d4_x3,l_y3,d4_x3,d4_y2);
							d4_x3--;
							d4_y2-=(y[1]-y[2])/(x[1]-d_x1);
						}
					}
				} else {
				
				if(y[2] < y[1]){
            	lim = y[2]
          	} else {
            	lim = y[1];
          	}
                       
          	for(i = y[0]; i < lim; i++){
              line(d_x1,l_y1,d_x2,l_y1);
              l_y1++;
              d_x2+=(x[2]-x[0])/(y[2]-y[0]);
              d_x1-=(x[0]-x[1])/(y[1]-y[0]);
              last_length = d_x2;
          	}

          	//fill bot-side
          	if(y[1] < y[2]){
            	for(i = x[1]; i < x[2]; i++){
              		if(i < d_x2){
                		line(l_x2,d2_y1,l_x2,d2_y2);
                		l_x2++;
                		d2_y2+=(y[2]-y[1])/(x[2]-x[1]);
              		} else {
                		line(l_x2,d2_y1,l_x2,d2_y2);
                		l_x2++;
                		d2_y2+=(y[2]-y[1])/(x[2]-x[1]);
                		d2_y1+=(y[2]-y[1])/(x[2]-d_x2);
              		}
            	}
          	} else {
           		for(i = x[2]; i > x[1]; i--){
             		if(i > d_x1){
                		line(l_x3,l_y3,l_x3,d3_y2);
                		l_x3--;
                		d3_y2+=(y[1]-y[2])/(x[2]-x[1]);
              		} else {
                		line(l_x3,d3_y1,l_x3,d3_y2);
                		l_x3--;
                		d3_y2+=(y[1]-y[2])/(x[2]-x[1]);
                		d3_y1-=(y[1]-y[2])/(x[1]-d_x1);
              		}
            	}
          	} 
				}	 
			 	} else {
			 
				}
        break;
      }
}
}
