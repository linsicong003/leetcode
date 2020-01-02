let tagGroup1 = [
    { name: 'a' },
    { name: 'b' }
  ]
  
  let tagGroup2 = [
    { name: 'c' },
    { name: 'd' }
  ]

  const add = (list1, list2) => {
    const tmp1 = list1.map(item => item.name);
    const tmp2 = list2.map(item => item.name);
    let result = [];
    tmp1.forEach(one => {
        result = result.concat(tmp2.map(two => {
            return { name: one, name2: two}
        }))
    })
    return result;
  }

  console.log(add(tagGroup1, tagGroup2))