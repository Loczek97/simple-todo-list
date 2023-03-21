export default function PickColor(num) {
    const colors = [
        { primaryColor: 'red-500', secondaryColor: 'white' },
        { primaryColor: 'blue-500', secondaryColor: 'white' },
        { primaryColor: 'green-500', secondaryColor: 'black' },
        { primaryColor: 'yellow-500', secondaryColor: 'black' },
        { primaryColor: 'purple-500', secondaryColor: 'white' },
        { primaryColor: 'indigo-500', secondaryColor: 'white' },
        { primaryColor: 'cyan-500', secondaryColor: 'black' },
        { primaryColor: 'amber-500', secondaryColor: 'black' },
        { primaryColor: 'lime-500', secondaryColor: 'black' },
        { primaryColor: 'emerald-500', secondaryColor: 'black' },
        { primaryColor: 'orange-500', secondaryColor: 'black' },
        { primaryColor: 'blue-500', secondaryColor: 'white' },
        { primaryColor: 'rose-500', secondaryColor: 'white' },
        { primaryColor: 'violet-500', secondaryColor: 'white' },
        { primaryColor: 'sky-500', secondaryColor: 'black' },
    ];

    if (typeof num === 'number') return colors[num]

    const randomIndex = Math.floor(Math.random() * colors.length);


    return colors[randomIndex];
}
