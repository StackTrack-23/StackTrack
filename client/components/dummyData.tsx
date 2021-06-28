
const posts = [
  {
  "company": "Adobe",
  "position": "Software Engineer",
  "date": "2021-03-15",
  "status": "Applied",
  "salary": 250000,
  "contact": "Saul Goodman",
  "reference": "Hector Salamanca",
  "link": "https://linkedin.com/",
  "notes": "Adobe At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  },
  {
  "company": "UberEats",
  "position": "Software Dev",
  "date": "2021-03-15",
  "status": "Applied",
  "salary": 200000,
  "contact": "Saul Goodman",
  "reference": "Hector Salamanca",
  "link": "https://"linkedin.com/",
  "notes": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
  "company": "Enigma",
  "position": "Backend Dev",
  "date": "2021-03-15",
  "status": "Doubled Down",
  "salary": "250,000",
  "contact": "Michael Ehrmantraut",
  "reference": "Jose Cruz",
  "link": "https://Enigma.com/",
  "notes": "Enigma emailed me back"
  },
  {
  "company": "Uber",
  "position": "Backend Eng",
  "date": "2021-03-15",
  "status": "Applied",
  "salary": "350,000",
  "contact": "Jessie Pinkman",
  "reference": "Jose Cruz",
  "link": "https://"linkedin.com/",
  "notes": "Uber wants phonescreen"
  },
  {
  "company": "Amazon AWS",
  "position": "Software Dev Lvl 2",
  "date": "2021-03-15",
  "status": "Applied",
  "salary": 250000,
  "contact": "Saul Goodman",
  "reference": "Jose Cruz",
  "link": "https://aws.amazon.com/",
  "notes": "Amazon AWS was hard to get a hold of to double down"
  }
  ,
  {
  "company": "Ocrolus",
  "position": "Jr. System Administrator",
  "date": "2021-03-16",
  "status": "Applied",
  "salary": 250000,
  "contact": "Saul Goodman",
  "reference": "Ross Sarcona",
  "link": "https://www.linkedin.com/jobs/view/2444969162/?eBP=NotAvailableFromMidTier&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=JsjAQpO%2BC1nZYvMkQwWyjw%3D%3D&trackingId=pjwHn4gizRzCSvcb0g9Fvw%3D%3D&trk=flagship3_search_srp_jobs&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_jobs%3BM%2FpiW1E9TdyBE01jTPLxeQ%3D%3D&lici=pjwHn4gizRzCSvcb0g9Fvw%3D%3D",
  "notes": "Got a hold of Lucy to double down"
  }
  ,
  {
  "company": "Anders Group, LLC",
  "position": "Program Analyst",
  "date": "2021-03-16",
  "status": "Applied",
  "salary": 250000,
  "contact": "Saul Goodman",
  "reference": "Ross Sarcona",
  "link": "https://www.linkedin.com/jobs/view/2445643574/?eBP=NotAvailableFromMidTier&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=JsjAQpO%2BC1nZYvMkQwWyjw%3D%3D&trackingId=ekfyJaAtdgBFiMfSvvSoTQ%3D%3D&trk=flagship3_search_srp_jobs&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_jobs%3B17tXwpI8T%2Bqr7fsdskeVsw%3D%3D&lici=ekfyJaAtdgBFiMfSvvSoTQ%3D%3D",
  "notes": "company was hard to get a hold of to double down"
  }
  ,

  {
  "company": "Allegiant",
  "position": "Software Eng",
  "date": "2021-03-16",
  "status": "Applied",
  "salary": 250000,
  "contact": "Saul Goodman",
  "reference": "Ross Sarcona",
  "link": "https://aws.amazon.com/",
  "notes": "company was hard to get a hold of to double down"
  }
  ,
  {
  "company": "Dignity Health",
  "position": "Software Eng",
  "date": "2021-03-16",
  "status": "Applied",
  "salary": 250000,
  "contact": "Saul Goodman",
  "reference": "Jose Cruz",
  "link": "https://aws.amazon.com/",
  "notes": "company was hard to get a hold of to double down"
  }
  ,
  {
  "company": "Ducommun Incorporated",
  "position": "Software Dev Lvl 2",
  "date": "2021-03-16",
  "status": "Applied",
  "salary": 250000,
  "contact": "Saul Goodman",
  "reference": "Jose Cruz",
  "link": "https://aws.amazon.com/",
  "notes": "company was hard to get a hold of to double down"
  }
  ,
  {
  "company": "Tech Data",
  "position": "Software Dev Lvl 2",
  "date": "2021-03-16",
  "status": "Applied",
  "salary": 250000,
  "contact": "Saul Goodman",
  "reference": "Jose Cruz",
  "link": "https://aws.amazon.com/",
  "notes": "company was hard to get a hold of to double down"
  }
  ,
  {
  "company": "Amazon Web Services (AWS)",
  "position": "Perry Tech - Engineering Operations Technician",
  "date": "2021-03-16",
  "status": "Applied",
  "salary": 250000,
  "contact": "Saul Goodman",
  "reference": "Jose Cruz",
  "link": "https://aws.amazon.com/",
  "notes": "company was hard to get a hold of to double down"
  }
  ,
  {
  "company": "Ducommun Incorporated",
  "position": "Software Dev Lvl 2",
  "date": "2021-03-16",
  "status": "Applied",
  "salary": 250000,
  "contact": "Saul Goodman",
  "reference": "Jose Cruz",
  "link": "https://aws.amazon.com/",
  "notes": "company was hard to get a hold of to double down"
  }
  ,
  {
  "company": "Autodesk",
  "position": "Software Eng",
  "date": "2021-03-01",
  "status": "applied",
  "salary": 225000,
  "contact": "Jenny",
  "reference": "Chip",
  "link": "autodesk.com",
  "notes": "I love this comany"
  }
  ,
]

module.exports = posts; 