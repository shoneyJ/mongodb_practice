CREATE (:Person {name:"Maier"}),(:Person {name:"Mayer"}),(:Person {name:"Meyer"}),(:Person {name:"Teier"}),(:Person {name:"Müller"})


CREATE (:Person{name:"Karl"})-[:PARENT_OF]->(:Person{name:"Susan"})-[:PARENT_OF]->(:Person{name:"Gerda"})-[:PARENT_OF]->(:Person{name:"Julie"})


MERGE (pmaier:Person {name:"Maier"})

MERGE (pmaier)-[:PARENT_OF]->(:Person{name:"Maier",born:"2021"})

MERGE (pmaier)-[:PARENT_OF]->(:Person{name:"Maier",born:"2020"})

MERGE (pmaier)-[:PARENT_OF]->(:Person{name:"Maier",born:"2019"})

MERGE (pmaier)-[:PARENT_OF]->(:Person{name:"Maier",born:"2018"})

MERGE (pmayer:Person {name:"Mayer"})

MERGE (pmayer)-[:PARENT_OF]->(:Person{name:"Mayer",born:"2021"})

MERGE (pteier:Person {name:"Teier"})

MERGE (pteier)-[:PARENT_OF]->(:Person{name:"Teier",born:"2021"})

MERGE (pteier)-[:PARENT_OF]->(:Person{name:"Teier",born:"2020"})

MATCH (p:Person)-[r:PARENT_OF]->(c:Person)

WITH p, count(c) AS child_count

WHERE child_count > 3

RETURN p.name ORDER BY child_count DESC LIMIT 1








CREATE (l1:Location {address:"Wormser Straße 32, 69123 Heidelberg", lon:49.416236, lat:8.649045})

CREATE (l2:Location {address:"Wormser Straße 28, 69123 Heidelberg", lon:49.416555, lat:8.649009})

// Next two are 9 m apart

CREATE (l3:Location {address:"Schollengewann 9/4,69123 Heidelberg", lon:49.417174, lat:8.646585, height:41})

CREATE (l4:Location {address:"Dammweg 21,69123 Heidelberg", lon:49.417166, lat:8.646505, height:41})

CREATE (l5:Location {address:"Sandwingert 23, 69123 Heidelberg", lon:49.419349, lat:8.643954})



CREATE (l1)-[:TO {distance:35}]->(l2)

CREATE (l2)-[:TO {distance:278}]->(l3)

CREATE (l3)-[:TO {distance:9}]->(l4)

CREATE (l4)-[:TO {distance:371}]->(l5)

CREATE (l5)-[:TO {distance:662}]->(l1)

CREATE (l1)-[:TO {distance:292}]->(l3)

CREATE (l1)-[:TO {distance:301}]->(l4)

CREATE (l2)-[:TO {distance:287}]->(l4)

CREATE (l2)-[:TO {distance:641}]->(l5)