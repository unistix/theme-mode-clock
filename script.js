const _hour = document.querySelector('.hour');
const _minute = document.querySelector('.minute');
const _second = document.querySelector('.second');
const _time = document.querySelector('.time');
const _date = document.querySelector('.date');
const _toggle = document.querySelector('.toggle');
const _html = document.querySelector('html');
const _button = document.querySelector('button');
const _center = document.querySelector('.center-point');

const days = ["Sunday", "Monday", "Tuesday", "Wednesdsay", "Thursday", "Friday", "Saturday", "Sunday"]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

_toggle.addEventListener('click', (e) => {
	if(_html.classList.contains('dark') && _toggle.classList.contains('dark') && _second.classList.contains('dark') && _center.classList.contains('dark') && _time.classList.contains('dark') ){
		//DARK > LIGHT
		_html.classList.remove('dark')
		_toggle.classList.remove('dark')
		_second.classList.remove('dark')
		_center.classList.remove('dark')
		_time.classList.remove('dark')

		e.target.innerHTML = 'Dark Mode'
	}else{
		_html.classList.add('dark')
		_toggle.classList.add('dark')
		_second.classList.add('dark')
		_center.classList.add('dark')
		_time.classList.add('dark')
		e.target.innerHTML = 'Light Mode'
	}

})

function setTime(){
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDay();
	const date = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const ampm = hours >= 12 ? 'PM' : 'AM';


	console.log(scale(hoursForClock,0,11,0,360));
	_hour.style.transform = `translate(50%, -100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`;

	_minute.style.transform = `translate(50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`;
	_second.style.transform = `translate(50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`;


	_time.innerHTML = `${hoursForClock}:${minutes < 10 ? `0 ${minutes}` : minutes} ${ampm}`

	_date.innerHTML = `${days[day]}, ${months[month]} ${date}`




}

const scale = (num, in_min, in_max, out_min, out_max) => {
	console.log('working')
	return (num - in_min)* (out_max - out_min) / (in_max - in_min) + out_min;

}



setTime()

setInterval(setTime,1000)