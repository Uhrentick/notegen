//false=natural true=sharp
//base,octave,type,nextBase,frequency,base2
var c1 = new Note('C',1,false,'D',32.70),
	cs1 = new Note('C',1,true,'D',34.65),
	d1 = new Note('D',1,false,'E',36.71),
	ds1 = new Note('D',1,true,'E',38.89),
	e1 = new Note('E',1,false,'F',41.20),
	f1 = new Note('F',1,false,'G',43.65),
	fs1 = new Note('F',1,true,'G',46.25),
	g1 = new Note('G',1,false,'A',49.00),
	gs1 = new Note('G',1,true,'A',51.91),
	a1 = new Note('A',1,false,'B/H',55.00),
	as1 = new Note('A',1,true,'B/H',58.27),
	b1 = new Note('B',1,false,'C',61.74,'H'),
	c2 = new Note('C',2,false,'D',65.41),
	cs2 = new Note('C',2,true,'D',69.30),
	d2 = new Note('D',2,false,'E',73.42),
	ds2 = new Note('D',2,true,'E',77.78),
	e2 = new Note('E',2,false,'F',82.41),
	f2 = new Note('F',2,false,'G',87.31),
	fs2 = new Note('F',2,true,'G',92.50),
	g2 = new Note('G',2,false,'A',98.00),
	gs2 = new Note('G',2,true,'A',103.80),
	a2 = new Note('A',2,false,'B',110.00),
	as2 = new Note('A',2,true,'B',116.5),
	b2 = new Note('B',2,false,'C',123.5,'H'),
	c3 = new Note('C',3,false,'D',130.80),
	cs3 = new Note('C',3,true,'D',138.60),
	d3 = new Note('D',3,false,'E',146.80),
	ds3 = new Note('D',3,true,'E',155.60),
	e3 = new Note('E',3,false,'F',164.80),
	f3 = new Note('F',3,false,'G',174.60),
	fs3 = new Note('F',3,true,'G',185.00),
	g3 = new Note('G',3,false,'A',196.00),
	gs3 = new Note('G',3,true,'A',207.7),
	a3 = new Note('A',3,false,'B',220.00),
	as3 = new Note('A',3,true,'B',233.10),
	b3 = new Note('B',3,false,'C',246.90,'H'),
	c4 = new Note('C',4,false,'D',261.60),
	cs4 = new Note('C',4,true,'D',277.20),
	d4 = new Note('D',4,false,'E',293.70),
	ds4 = new Note('D',4,true,'E',311.10),
	e4 = new Note('E',4,false,'F',329.60),
	f4 = new Note('F',4,false,'G',349.20),
	fs4 = new Note('F',4,true,'G',370.00),
	g4 = new Note('G',4,false,'A',392.00),
	gs4 = new Note('G',4,true,'A',415.30),
	a4 = new Note('A',4,false,'B',440.00),
	as4 = new Note('A',4,true,'B',466.20),
	b4 = new Note('B',4,false,'C',493.90,'H'),
	c5 = new Note('C',5,false,'D',523.30),
	cs5 = new Note('C',5,true,'D',554.40),
	d5 = new Note('D',5,false,'E',587.30),
	ds5 = new Note('D',5,true,'E',622.30),
	e5 = new Note('E',5,false,'F',659.30),
	f5 = new Note('F',5,false,'G',698.50),
	fs5 = new Note('F',5,true,'G',740.00),
	g5 = new Note('G',5,false,'A',784.00),
	gs5 = new Note('G',5,true,'A',830.60),
	a5 = new Note('A',5,false,'B',880.00),
	as5 = new Note('A',5,true,'B',932.30),
	b5 = new Note('B',5,false,'C',987.80,'H'),
	c6 = new Note('C',6,false,'D',1047),
	cs6 = new Note('C',6,true,'D',1109),
	d6 = new Note('D',6,false,'E',1175),
	ds6 = new Note('D',6,true,'E',1245),
	e6 = new Note('E',6,false,'F',1319),
	f6 = new Note('F',6,false,'G',1397),
	fs6 = new Note('F',6,true,'G',1480),
	g6 = new Note('G',6,false,'A',1568),
	gs6 = new Note('G',6,true,'A',1661),
	a6 = new Note('A',6,false,'B',1760),
	as6 = new Note('A',6,true,'B',1865),
	b6 = new Note('B',6,false,'C',1976,'H');

var notes = [c1,cs1,d1,ds1,e1,f1,g1,gs1,a1,
			as1,b1,c2,cs2,d2,ds2,e2,f2,fs2,
			g2,gs2,a2,as2,b2,c3,cs3,d3,ds3,
			e3,f3,fs3,g3,gs3,a3,as3,b3,c4,
			cs4,d4,ds4,e4,f4,fs4,g4,gs4,a4,
			as4,b4,c5,cs5,d5,ds5,e5,f5,fs5,
			g5,gs5,a5,as5,b5,c6,cs6,d6,ds6,
			e6,f6,fs6,g6,gs6,a6,as6,b6];

var isRunning = false;
var rolling;
var countDown;		

function Note(base,octave,type,nextBase,frequency,base2){
	this.base = base;
	this.base2 = base2;
	this.octave = octave;
	this.type = type;
	this.frequency = frequency;
	this.nextBase = nextBase;

	this.fileName;
	this.sharp = '#';
	this.flat = '&#x266D;';

	this.getRand = function(isHard){
		var r = Math.random();
		r = Math.round(r);
		var temp;
		if(r){
			temp = this.base+this.sharp;
		}else{
			temp = this.nextBase+this.flat;
		}
		if(isHard){
			temp += this.octave;
		}
		return temp;
	}
	this.getFlat = function(isHard){
		var temp;
		temp = this.nextBase+this.flat;
		if(isHard){
			temp += this.octave;
		}
		return temp;
	}
	this.getNote = function(isHard){
		var temp;
		if(this.type){
			temp = this.base+this.sharp;
		}else{
			temp = this.base;
		}

		if(isHard){
			temp += this.octave;
		}
		return temp;
	}

	this.isWhatFretOn = function(string,isHard){
		// Returns the fret of this note
		// on the desired string.

		var tempString = getString(string);
		var out;
		if(isHard){
			for(var i=0;i<tempString.length;i++){
				if(this.frequency == tempString[i].frequency){
					out = i;
				}			
			}
		}else{
			out = new Array();
			var arrayCounter = 0;
			for(var i=0;i<tempString.length;i++){
				if(this.base == tempString[i].base && this.type == tempString[i].type){
					out[arrayCounter] = i;
					arrayCounter++;				
				}			
			}
		}
		if(out == undefined){
			out = '-';
		}
		return out;
	}
}

// 0=e,1=a,2=d,3=g,4=b,5=e2
// Returns one specified fret as an array
function getString(string){
	var firstNote = document.getElementById('string'+string).value;
	var finalString = new Array();
	var startFret;
	var fretboardLength = 24;
	for(var i=0;i<notes.length;i++){
		if(firstNote == notes[i].getNote(1)){
			startFret = i;
		}
	}
	for(var i=0;i<fretboardLength;i++){
		finalString[i] = notes[startFret];
		startFret++;
	}
	return finalString;
}

// Removes Duplicates from Arrays
function removeDuplicates(keyFn, array){
  var mySet = new Set();
  return array.filter(function(x) {
    var key = keyFn(x),
    	isNew = !mySet.has(key);
    if (isNew){
    	mySet.add(key);
    } 
    return isNew;
  });
}

// Returns a specified dom-element
function getVarFromId(id){
	return document.getElementById(id);
}

// Returns a random item of an array
function getRandomItem(xArray){
	var r = Math.random() * (xArray.length - 1);
	r = Math.round(r);
	return xArray[r];
}


function Main(){
	this.isSharp;
	this.isFlat;
	this.case;
	this.isHard;
	this.target;
	this.prevNote;
	this.currentNote;
	this.tempOut;

	this.setNote = function(){
		var e = getString(0),
			a = getString(1),
			d = getString(2),
			g = getString(3),
			b = getString(4),
			e2 = getString(5),
			all = e.concat(a,d,g,b,e2);

		all = removeDuplicates(x => x.frequency,all);
		this.currentNote = getRandomItem(all);
		prevNote = this.currentNote;
	}
	// which types of notes are requested?
	// all,sharps&naturals,flats&naturals,only naturals
	this.getCase = function(){
		if(this.isSharp && this.isFlat){
			return 0;
		}else if(this.isSharp && !this.isFlat){
			return 1;
		}else if(!this.isSharp && this.isFlat){
			return 2;
		}else{
			return 3;
		}
	}
	this.getNote = function(){
		switch(this.case){
			//sharps,flats,naturals
			case 0:
				return this.currentNote.getRand(this.isHard);
			break;
			//sharps,naturals
			case 1:
				return this.currentNote.getNote(this.isHard);
			break;
			//flats,naturals
			case 2:
				if(this.currentNote.type){
					return this.currentNote.getFlat(this.isHard);
				}else{
					return this.currentNote.getNote(this.isHard);
				}
			break;
			//naturals
			case 3:
				while(this.currentNote.type){
					this.setNote();
				}
				return this.currentNote.getNote(this.isHard);
			break;
		}		
	}
	this.write = function(id){
		this.isSharp = getVarFromId('s').checked;
		this.isFlat = getVarFromId('b').checked;
		this.isHard = getVarFromId('mode').checked;
		this.case = this.getCase();
		this.setNote();
		this.tempOut = this.getNote();
		getVarFromId(id).innerHTML = this.tempOut;
		getVarFromId('fret5').innerHTML = 'E2: '+this.currentNote.isWhatFretOn(5,this.isHard);
		getVarFromId('fret4').innerHTML = 'B: '+this.currentNote.isWhatFretOn(4,this.isHard);
		getVarFromId('fret3').innerHTML = 'G: '+this.currentNote.isWhatFretOn(3,this.isHard);
		getVarFromId('fret2').innerHTML = 'D: '+this.currentNote.isWhatFretOn(2,this.isHard);
		getVarFromId('fret1').innerHTML = 'A: '+this.currentNote.isWhatFretOn(1,this.isHard);
		getVarFromId('fret0').innerHTML = 'E: '+this.currentNote.isWhatFretOn(0,this.isHard);

		console.log(this.tempOut);
	}
}

var mainX = new Main();
var counter = new Countdown();

function doIt(){
	var time = getVarFromId('number').value;
	counter.calcSeconds();
	getVarFromId('text').innerHTML = counter.getSeconds()+'s';
	var k = counter.getSeconds()/time*100;
	getVarFromId('graphical').style.width = k+'%';

	if(counter.seconds==time){
		mainX.write('note');
		// playSound(mainX.currentNote.frequency);
	}
}

// 
function Countdown(){
	this.seconds;
	this.calcSeconds = function(){
		if(this.seconds == 0){
			this.setSeconds();
		}else{
			this.seconds--;			
		}
	}
	this.setSeconds = function(){
		this.seconds = getVarFromId('number').value;
	}
	this.getSeconds = function(){
		return this.seconds;
	}
}

// starts or stops notegeneration depending on
// the global 'isRunning'
function runOrDie(){
	console.log('runordie');
	if(isRunning){
		console.log('stopped');
		clearInterval(rolling);
		clearInterval(countDown);
		isRunning = false;
	}else{
		console.log('started');
		counter.setSeconds();
		rolling = setInterval(doIt,1000);
		isRunning = true;
	}
}


// -----------EXPERIMENTAL---------------


// var context = new AudioContext();
// function playSound(freq){
// var osc = context.createOscillator();
// var gainNode= context.createGain();

// gainNode.gain.value = 0.5;
// gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 3);
// osc.frequency.value = freq;
// osc.type = 'sine';
// osc.connect(gainNode);
// gainNode.connect(context.destination);
// osc.start();
// }

