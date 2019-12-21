var data1 = [
    {
      text: '1期',
      value: 1
    }, {
      text: '2期',
      value: 2
    },
    {
      text: '3期',
      value: 3
    },
    {
      text: '4期',
      value: 4
    },
    {
      text: '5期',
      value: 5
    },
    {
      text: '6期',
      value: 6
    },
    {
      text: '7期',
      value: 7
    }, {
      text: '8期',
      value: 8
    },
    {
      text: '9期',
      value: 9
    },
    {
      text: '10期',
      value: 10
    },
    {
      text: '11期',
      value: 11
    },
    {
      text: '12期',
      value: 12
    },
    {
      text: '13期',
      value: 13
    },
    {
      text: '14期',
      value: 14
    },
    {
      text: '15期',
      value: 15
    }
  ];

  var picker1El = document.getElementById('picker1');
  var picker1 = new Picker({
  	title:"选择代扣期数",
    data: [data1]
  });

  picker1.on('picker.select', function (selectedVal, selectedIndex) {
    $("#picker1>input").val(data1[selectedIndex[0]].text)
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
  


var data2 = [
    {
      text: '等额',
      value: 1
    }, {
      text: '自定义',
      value: 2
    }
  ];

  var picker2El = document.getElementById('picker2');
  var picker2 = new Picker({
  	title:"计算方式",
    data: [data2]
  });

  picker2.on('picker.select', function (selectedVal, selectedIndex) {
    $("#picker2>input").val(data2[selectedIndex[0]].text)
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