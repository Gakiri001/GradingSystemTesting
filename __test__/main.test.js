const {gradeLangComp,gradeMathScience,gradeReligios, average,calculateGradeAndAverage} = require("../main")

describe("Tests the marks for Mathematics,Physcis,Chemistry", () =>{
  it("Retuns Grade A if the marks are within the range 70-100 ",() =>{
    expect(gradeMathScience(80)).toBe(`Grade A`)
  })
  it("Retuns Grade B if the marks are within the range 60-69 ",() =>{
    expect(gradeMathScience(65)).toBe(`Grade B`)
  })
  it("Retuns Grade C if the marks are within the range 50-59 ",() =>{
    expect(gradeMathScience(55)).toBe(`Grade C`)
  })
  it("Retuns Pass if the marks are within the range 40-49 ",() =>{
    expect(gradeMathScience(45)).toBe(`Pass`)
  })
  it("Retuns sup if the marks are below 40 ", () =>{
    expect(gradeMathScience(39)).toBe(`Sup`)
  })
})

describe("Tests the marks for Religious Education", () =>{
  it("Retuns Grade A if the marks are within the range 80-100 ",() =>{
    expect(gradeReligios(80)).toBe(`Grade A`)
  })
  it("Retuns Grade B if the marks are within the range 70-79 ",() =>{
    expect(gradeReligios(75)).toBe(`Grade B`)
  })
  it("Retuns Grade C if the marks are within the range 60-69 ",() =>{
    expect(gradeReligios(65)).toBe(`Grade C`)
  })
  it("Retuns Pass if the marks are within the range 50-59 ",() =>{
    expect(gradeReligios(55)).toBe(`Pass`)
  })
  it("Retuns sup if the marks are below 50 ",() =>{
    expect(gradeReligios(39)).toBe(`Sup`)
  })
})

describe("Tests the marks for English,Swahili,Computer Science", () =>{
  it("Retuns Grade A if the marks are within the range 75-100 ",() =>{
    expect(gradeLangComp(75)).toBe(`Grade A`)
  })
  it("Retuns Grade B if the marks are within the range 65-74 ",() =>{
    expect(gradeLangComp(66)).toBe(`Grade B`)
  })
  it("Retuns Grade C if the marks are within the range 55-64 ",() =>{
    expect(gradeLangComp(55)).toBe(`Grade C`)
  })
  it("Retuns Pass if the marks are within the range 45-54 ",() =>{
    expect(gradeLangComp(45)).toBe(`Pass`)
  })
  it("Retuns sup if the marks are below 45 ",() =>{
    expect(gradeLangComp(44)).toBe(`Sup`)
  })
})

describe("Tests the average total for all the marks",() =>{
  it("Returns the total marks divided by 7 as average",()=>{
    expect(average(55,45,50,66,99,55,32)).toEqual(57)
  })
})

