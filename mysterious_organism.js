// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

/*Project Goals
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.*/

//Since I need to create multiple objects, I created a factory function
const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,
        returnRandomBase(element) {
            const dnaBases = []
            switch (element) {
                case "A":
                    dnaBases.push('T', 'C', 'G')
                    break;
                case "T":
                    dnaBases.push('A', 'C', 'G')
                    break;
                case "C":
                    dnaBases.push('A', 'T', 'G')
                    break;
                case "G":
                    dnaBases.push('A', 'C', 'T')
                    break;
            }
            return dnaBases[Math.floor(Math.random() * 3)]
        },

        //In order to simulate the high rate of mutation, the mutate method was created! This will randomly select a base from the dna property and change it to another base! 
        mutate() {
            let differentBase = this.dna.map(base => (base === this.dna[Math.floor(Math.random() * 4)] ? this.returnRandomBase(base) : base))
            return differentBase
        },

        //In order to compare the DNA sequences of different specimens, the method below will compute how many bases are identical between 2 specimens!
        compareDNA(object) {
            let identicalDNA = 0
            this.dna.forEach((char1, index) => {
                const char2 = object.dna[index];
                if (char1 === object.dna[index]) {
                    identicalDNA++
                }
            });
            const sharedDNA = Math.round((identicalDNA / this.dna.length) * 100)
            return { label: 'specimen #' + this.specimenNum + ' and #' + object.specimenNum + ' have ' + sharedDNA + '% DNA in common!', percentage: sharedDNA }
        },

        //The method below will return true if the object's dna array contains at least 60% 'C' or 'G' bases!
        willLikelySurvive() {
            const mightSurvive = this.dna.filter(strain => (strain == 'C' || strain == 'G' ? strain : null))
            const isSixtyOrMore = Math.round((mightSurvive.length / this.dna.length) * 100)
            if (isSixtyOrMore >= 60) {
                return true
            } else return false
        },

        //The method below will return a complementary DNA strand ('A's match with 'T's and viceversa and 'C's match with 'G's and viceversa!)
        complementStrand() {
            const complementStr = []
            for (e = 0; e < this.dna.length; e++) {
                if (this.dna[e] == 'A') {
                    complementStr.push('T')
                } else if (this.dna[e] == 'C') {
                    complementStr.push('G')
                } else if (this.dna[e] == 'T') {
                    complementStr.push('A')
                } else if (this.dna[e] == 'G') {
                    complementStr.push('C')
                }
            } return complementStr
        }
    }
}

//The original specimen!
const specimen1000 = pAequorFactory(1000, mockUpStrand())

//Using the factory function, 30 specimens that survive in their natural habitat were created!
const batch30Specimens = []
let p = 0
while (batch30Specimens.length < 30) {
    let exp = pAequorFactory(p, mockUpStrand())
    if (exp.willLikelySurvive() == true) {
        batch30Specimens.push(exp)
        p += 1
    }
}

//By making use of the method created above, compareDNA, the function below computes the two most related instances of pAequor!
const twoMostRelated = (pAequorFactory) => {
    listOfRelated = batch30Specimens.map(el => specimen1000.compareDNA(el));
    const firstTwo = listOfRelated.sort((first, second) => {
        if (first.percentage > second.percentage) {
            return -1;
        }
        if (first.percentage < second.percentage) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }).slice(0, 2).forEach(({ label }) => console.log(label))
}

//console.log(twoMostRelated(specimen1000))
//console.log(batch30Specimens)