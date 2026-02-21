export interface Photo {
	filename: string;
	alt: string;
	category: 'club' | 'cafe' | 'party' | 'portrait';
	featured: boolean;
}

export const photos: Photo[] = [
	{ filename: 'enigma-dj-booth', alt: 'DJ set en ENIGMA con luces de neón', category: 'club', featured: true },
	{ filename: 'enigma-mixing-crew', alt: 'Sesión de mezcla en grupo en ENIGMA', category: 'club', featured: false },
	{ filename: 'dj-crew-booth', alt: 'Crew de DJs en la cabina', category: 'club', featured: false },
	{ filename: 'club-crowd-disco', alt: 'Pista llena con esferas de disco', category: 'club', featured: true },
	{ filename: 'house-party-dj', alt: 'DJ set en fiesta privada', category: 'party', featured: false },
	{ filename: 'enigma-mixing', alt: 'Mezclando en ENIGMA, vista lateral', category: 'club', featured: true },
	{ filename: 'enigma-low-angle', alt: 'DJ en ENIGMA, ángulo bajo con luces azules', category: 'portrait', featured: false },
	{ filename: 'morocco-party-group', alt: 'Fiesta temática de Marruecos, grupo', category: 'party', featured: true },
	{ filename: 'morocco-party-crew', alt: 'Crew en la fiesta de Marruecos', category: 'party', featured: false },
	{ filename: 'cabin-dj-session', alt: 'Sesión de DJ en cabaña', category: 'party', featured: false },
	{ filename: 'club-crowd-wide', alt: 'Vista panorámica del club con esferas', category: 'club', featured: false },
	{ filename: 'club-dj-action', alt: 'DJ en acción con visuales de colores', category: 'club', featured: true },
	{ filename: 'cafe-duo', alt: 'Sesión en café con amigo', category: 'cafe', featured: false },
	{ filename: 'cafe-overhead', alt: 'Vista aérea del setup en café', category: 'cafe', featured: true },
	{ filename: 'cafe-group', alt: 'Grupo en el café', category: 'cafe', featured: false },
	{ filename: 'cafe-session', alt: 'Sesión de DJ en barra de café', category: 'cafe', featured: false },
	{ filename: 'cafe-overhead-smile', alt: 'Vista aérea en café, sonriendo', category: 'cafe', featured: false },
];

export const featuredPhotos = photos.filter((p) => p.featured);
