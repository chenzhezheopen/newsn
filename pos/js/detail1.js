
  var data1 = [
    {
      text: '2015',
      value: 1
    }, {
      text: '2016',
      value: 2
    },
    {
      text: '2017',
      value: 3
    },
    {
      text: '2018',
      value: 4
    },
    {
      text: '2019',
      value: 5
    },
    {
      text: '2020',
      value: 6
    },
    {
      text: '2021',
      value: 7
    }, {
      text: '2022',
      value: 8
    },
    {
      text: '2023',
      value: 9
    },
    {
      text: '2024',
      value: 10
    },
    {
      text: '2025',
      value: 11
    },
    {
      text: '2026',
      value: 12
    },
    {
      text: '2027',
      value: 13
    }
  ];

  var data2 = [
    {
      text: '1',
      value: 'a'
    }, {
      text: '2',
      value: 'b'
    },
    {
      text: '3',
      value: 'c'
    },
    {
      text: '4',
      value: 'd'
    },
    {
      text: '5',
      value: 'e'
    },
    {
      text: '6',
      value: 'f'
    },
    {
      text: '7',
      value: 'g'
    }, 
    {
      text: '8',
      value: 'h'
    },{
      text: '9',
      value: 'i'
    },
    {
      text: '10',
      value: 'j'
    },
    {
      text: '11',
      value: 'k'
    }, {
      text: '12',
      value: 'l'
    },
  ];



  var picker1El = document.getElementById('select-value1');
  var picker2El = document.getElementById('select-value2');

  var picker2 = new Picker({
  	title:"请选择月份",
    data: [data1, data2]
  });

  picker2.on('picker.select', function (selectedVal, selectedIndex) {
    
    if(picker2El.value!=data1[selectedIndex[0]].text + '-' + data2[selectedIndex[1]].text){
    	picker2El.value = data1[selectedIndex[0]].text + '-' + data2[selectedIndex[1]].text;
    	document.getElementById('myframe').contentWindow.parentfun()
    }
    
	
  });

  picker2.on('picker.change', function (index, selectedIndex) {
    console.log(index);
  });

  picker2.on('picker.valuechange', function (selectedVal, selectedIndex) {
    console.log(selectedVal);
  });

 


  picker2El.addEventListener('click', function () {
    picker2.show();
  });
  
  
  var picker1 = new Picker({
  	title:"请选择月份",
    data: [data1, data2]
  });

  picker1.on('picker.select', function (selectedVal, selectedIndex) {
//  picker1El.val = data1[selectedIndex[0]].text + ' ' + data2[selectedIndex[1]].text;
    if(picker1El.value!=data1[selectedIndex[0]].text + '-' + data2[selectedIndex[1]].text){
    	picker1El.value = data1[selectedIndex[0]].text + '-' + data2[selectedIndex[1]].text;
    	document.getElementById('myframe').contentWindow.parentfun()
    }
  });

  picker1.on('picker.change', function (index, selectedIndex) {
    console.log(index);
  });

  picker1.on('picker.valuechange', function (selectedVal, selectedIndex) {
    console.log(selectedVal);
  });

 


  picker1El.addEventListener('click', function () {
    picker1.show();
  });



