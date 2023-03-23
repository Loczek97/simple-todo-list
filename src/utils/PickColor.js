export default function PickColor(num) {
    const colors = [
        { primaryColor: 'bg-blue-500', shadowColor: 'shadow-blue-500/50', secondaryColor: 'white' },
        { primaryColor: 'bg-green-500', shadowColor: 'shadow-green-500/50', secondaryColor: 'black' },
        { primaryColor: 'bg-yellow-500', shadowColor: 'shadow-yellow-500/50', secondaryColor: 'black' },
        { primaryColor: 'bg-purple-500', shadowColor: 'shadow-purple-500/50', secondaryColor: 'white' },
        { primaryColor: 'bg-indigo-500', shadowColor: 'shadow-indigo-500/50', secondaryColor: 'white' },
        { primaryColor: 'bg-cyan-500', shadowColor: 'shadow-cyan-500/50', secondaryColor: 'black' },
        { primaryColor: 'bg-amber-500', shadowColor: 'shadow-amber-500/50', secondaryColor: 'black' },
        { primaryColor: 'bg-lime-500', shadowColor: 'shadow-lime-500/50', secondaryColor: 'black' },
        { primaryColor: 'bg-emerald-500', shadowColor: 'shadow-emerald-500/50', secondaryColor: 'black' },
        { primaryColor: 'bg-orange-500', shadowColor: 'shadow-orange-500/50', secondaryColor: 'black' },
        { primaryColor: 'bg-blue-500', shadowColor: 'shadow-blue-500/50', secondaryColor: 'white' },
        { primaryColor: 'bg-rose-500', shadowColor: 'shadow-rose-500/50', secondaryColor: 'white' },
        { primaryColor: 'bg-violet-500', shadowColor: 'shadow-violet-500/50', secondaryColor: 'white' },
        { primaryColor: 'bg-sky-500', shadowColor: 'shadow-sky-500/50', secondaryColor: 'black' },
    ];



    if (typeof num === 'number') return colors[num]

    const randomIndex = Math.floor(Math.random() * colors.length);


    return colors[randomIndex];
}
