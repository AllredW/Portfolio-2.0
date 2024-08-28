export default function AboutPage() {
  return (
    <div className="container pt-4">
      <h2>About Me</h2>
      <p>
       I grew up with my sister in Tampa, FL. In that time, I developed a passion for theatre and the arts. My brother and I both pursued classes in theatre during high achool, and were regular participants in our school's theatre program in any way we could.

       After graduating, I enrolled at Rollins College in Orlando, FL, with a bachelor's program to pursue a career as an actor. But while there, I recieved a full liberal arts education in a wide range of subjects and topics. I graduated with a B.A. in 2013, and took up roots in the Orlando area afterward.

       Since graduating, I had been pursuing an acting career, while working various jobs to support myself. Eventually, computer science became one of those jobs, and I spent time educating myself in coding to further develop my skillset.
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <img src="../../assets/William Portrait Young.jpg" alt="Me in high school, applying stage makeup" height={'400px'}/>
            </div>
            <div className="col-lg-4">
          <img src="../../assets/William Portrait College.jpg" alt="My headshot from college" height={'400px'}/>
            </div>
            <div className="col-lg-4">
           <img src="../../assets/William Portrait Adult.jpg" alt="Me as an adult professional" height={'400px'}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
