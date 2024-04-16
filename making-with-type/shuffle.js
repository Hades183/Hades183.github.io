document.addEventListener('DOMContentLoaded', function() {

    const firstSet = ['a', 'b', 'c'];
    const secondSet = ['x', 'y', 'z'];
    const thirdSet = ['one', 'two', 'three'];
    const allSets = firstSet.concat(secondSet, thirdSet);


    function addRandomClasses() {

        const divs = document.querySelectorAll('.random');

        divs.forEach(div => {

            allSets.forEach(cls => {
                if (div.classList.contains(cls)) {
                    div.classList.remove(cls);
                }
            });


            const randomClass1 = firstSet[Math.floor(Math.random() * firstSet.length)];
            const randomClass2 = secondSet[Math.floor(Math.random() * secondSet.length)];
            const randomClass3 = thirdSet[Math.floor(Math.random() * thirdSet.length)];


            div.classList.add(randomClass1, randomClass2, randomClass3);
        });
    }


    setInterval(addRandomClasses, 2000);
});