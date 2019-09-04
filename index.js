
//declare contact

const myContacts = [
  {
    id: 1,
    name: "Ridho",
    phone: '087882252815',
    email: 'ridhoabdulmajid@gmail.com'
  },
  {
    id: 2,
    name: "Arsya",
    phone: '08976271821',
    email: 'arsya@gmail.com'
  },
  {
    id: 3,
    name: 'Nico',
    phone: '087698629892',
    email: 'nicoh@gmail.com'
  },
  {
    id: 4,
    name: 'Ian',
    phone: '087897973929',
    email: 'ian@gmail.com'
  },
  {
    id: 5,
    name: 'Janto',
    phone: '098768976289',
    email: 'jantoo@gmail.com'
  },
  {
    id: 6,
    name: 'Mevin',
    phone: '09768727829',
    email: 'mevin@gmail.com'
  }
]

//--------------------//
//  SHOW ALL CONTACTS //
//--------------------//

const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]
    console.log(
      `[${contact.id}] ${contact.name}- (${contact.phone}) <${contact.email}>`
    )
  }
}
showContacts(myContacts);

//------------------------//
//---------show name-----//
//-----------------------//

const showNames = names => {
  for (let index=0; index < names.length; index++){
    const name = names[index]
    console.log(`${name.name}`);
  }
}
showNames(myContacts);

//-----------------------//
//-----filter name-------//
//-----------------------//

const filterContacts = (contacts, minimumNameLength) => {
  let newContacts = []

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]

    if (contact.name.length >= minimumNameLength) {
      newContacts.push(contact)
    }
  }

  return newContacts
}
const filteredContacts = filterContacts(myContacts, 5 )

showContacts(filteredContacts);



