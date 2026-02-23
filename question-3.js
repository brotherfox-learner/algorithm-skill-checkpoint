/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n) เนื่องจากใน function findStudentById มีการค้นหาด้วย for loop ที่จะวนรอบข้อมูล 1 ครั้ง เวลาในการค้นหาข้อมูลจึงเพิ่มขึ้นตามจำนวนข้อมูลแบบ linear หรือ O(n) รวมทั้งแบบ Built in ก็มี = BigO เป็น O(n) เช่นเดียวกัน


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:O(n) เนื่องจากใน function findProductPrice. มีการค้นหาด้วย for loop ที่จะวนรอบข้อมูล 1 ครั้ง เวลาในการค้นหาข้อมูลจึงเพิ่มขึ้นตามจำนวนข้อมูลแบบ linear หรือ O(n) รวมทั้งแบบ Built in ก็มี = BigO เป็น O(n) เช่นเดียวกัน

New Answer: O(log n) เนื่องจากใน function findProductPrice มีการค้นหาด้วย binary search ซึ่งจะตัดครึ่งหนึ่งของข้อมูลในแต่ละรอบ ทำให้เวลาในการค้นหาข้อมูลลดลงเหลือ O(log n)
*/

/* 
Which function is more efficient and why?
Answer: findProductPrice2 เนื่องจากมีการค้นหาด้วย binary search ซึ่งจะตัดครึ่งหนึ่งของข้อมูลในแต่ละรอบ ทำให้เวลาในการค้นหาข้อมูลลดลงเหลือแบบ O(log n) ซึ่งจะมีประสิทธิภาพมากกว่า findProductPrice ที่เป็น O(n)


*/
