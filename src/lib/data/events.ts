export interface Event {
	date: string;
	day: string;
	month: string;
	title: string;
	venue: string;
	city: string;
	time: string;
}

export const events: Event[] = [
	{
		date: '15',
		day: 'Sábado',
		month: 'MAR',
		title: 'Noche de Afro House',
		venue: 'ENIGMA Club',
		city: 'CDMX',
		time: '23:00'
	},
	{
		date: '22',
		day: 'Sábado',
		month: 'MAR',
		title: 'Disco House Rooftop',
		venue: 'Terraza Norte',
		city: 'CDMX',
		time: '18:00'
	},
	{
		date: '05',
		day: 'Sábado',
		month: 'ABR',
		title: 'Sesión de Café',
		venue: 'Café Central',
		city: 'CDMX',
		time: '12:00'
	}
];
