import React from 'react';
import './About.css';
import myself from '../../assets/Myself.jpg';
import logo from '../../assets/Logo.jpg'
import Layout from '../layout/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const About = () => {
	return (
		<Layout>

			<div className="container">
				<img className="profile-image" src={myself} alt="Profile Image" />
				<div className="bio">
					<h1>About Me</h1>
					<p>Jestem projektantką wnętrz i wizualizatorką. Moja pasja do
						tworzenia magicznych przestrzeni i wizualizacji jest nieodłączną
						częścią mnie. Kiedy wkraczam do wnętrza, widzę więcej niż tylko
						meble i ściany. Widzę potencjał i możliwości, które mogą
						przekształcić zwykłe miejsce w oazę piękna i funkcjonalności. Moje
						umiejętności w obszarze SketchUp i V-Ray pozwalają mi wyrazić moją
						wizję z niezwykłą precyzją i realizmem.</p>
				</div>
			</div>
			<div className='section'></div>
			<div className="container">
				<div className="bio">
					<h1>About Me</h1>
					<p>Pracuję z pasją, dbając o każdy detal i połączenie kolorów, by
						stworzyć unikalne i zjawiskowe wnętrza. Moje prace nie są tylko
						obrazami, ale prawdziwymi emocjami, które oddziałują na zmysły i
						wywołują uczucia. Kiedy projektuję wnętrza, dbam o to, by
						odzwierciedlały one osobowość i styl życia klienta. Staram się
						zrozumieć ich potrzeby i marzenia, by móc przekształcić je w
						rzeczywistość. Każde z moich projektów jest wyjątkowe i oparte na
						indywidualnych wymaganiach, zawsze dążę do tego, by stworzyć
						miejsce, które będzie prawdziwym domem dla mojego klienta. Moje
						szkolenia z zakresu SketchUp i V-Ray umożliwiają mi przeniesienie
						moich wizji na ekran w sposób niewiarygodnie realistyczny. Dzięki
						temu, mogę pokazać klientom, jak ich przyszłe wnętrza będą
						wyglądać, zanim jeszcze zostaną zrealizowane.</p>
				</div>
				<img className="profile-image" src={logo} alt="Profile Image" />
			</div>
			<div className='section'></div>
			<div className="container">
				<img className="profile-image" src={logo} alt="Profile Image" />
				<div className="bio">
					<h1>About Me</h1>
					<p>To jest dla mnie niezwykle satysfakcjonujące, widzieć, jak moje
							wizje stają się rzeczywistością i przynosić radość i inspirację
							innym. Bycie projektantką wnętrz i wizualizatorką to nie tylko
							zawód, ale także sposób wyrażania swojej twórczej duszy i dawania
							ludziom możliwości odkrywania piękna w swoim otoczeniu. To jest
							to, co napędza mnie do działania każdego dnia i czyni moje życie
							pełnym pasji i spełnienia.</p>
				</div>

			</div>
			{/* <Container fluid style={{ width: '18rem', marginTop: '2rem' }}>
				<Row>
					<Col lg={12} md={12} sm={12}><Image src={myself} roundedCircle fluid/></Col>
					<Col>Klaudia Tarkowska</Col>
				</Row>
			</Container> */}
			{/* <div className='textField'>
				<Card.Text className='name'>Klaudia Tarkowska</Card.Text>
				<Card style={{ backgroundColor: '#f8f9fa', border: 'none' }}>
					<Card.Body>
						<Card.Text style={{ fontFamily: 'serif', fontSize: '18px' }}>
							Jestem projektantką wnętrz i wizualizatorką. Moja pasja do
							tworzenia magicznych przestrzeni i wizualizacji jest nieodłączną
							częścią mnie. Kiedy wkraczam do wnętrza, widzę więcej niż tylko
							meble i ściany. Widzę potencjał i możliwości, które mogą
							przekształcić zwykłe miejsce w oazę piękna i funkcjonalności. Moje
							umiejętności w obszarze SketchUp i V-Ray pozwalają mi wyrazić moją
							wizję z niezwykłą precyzją i realizmem.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card style={{ backgroundColor: '#f8f9fa', border: 'none' }}>
					<Card.Body>
						<Card.Text style={{ fontFamily: 'serif', fontSize: '18px' }}>
							Pracuję z pasją, dbając o każdy detal i połączenie kolorów, by
							stworzyć unikalne i zjawiskowe wnętrza. Moje prace nie są tylko
							obrazami, ale prawdziwymi emocjami, które oddziałują na zmysły i
							wywołują uczucia. Kiedy projektuję wnętrza, dbam o to, by
							odzwierciedlały one osobowość i styl życia klienta. Staram się
							zrozumieć ich potrzeby i marzenia, by móc przekształcić je w
							rzeczywistość. Każde z moich projektów jest wyjątkowe i oparte na
							indywidualnych wymaganiach, zawsze dążę do tego, by stworzyć
							miejsce, które będzie prawdziwym domem dla mojego klienta. Moje
							szkolenia z zakresu SketchUp i V-Ray umożliwiają mi przeniesienie
							moich wizji na ekran w sposób niewiarygodnie realistyczny. Dzięki
							temu, mogę pokazać klientom, jak ich przyszłe wnętrza będą
							wyglądać, zanim jeszcze zostaną zrealizowane.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card style={{ backgroundColor: '#f8f9fa', border: 'none' }}>
					<Card.Body>
						<Card.Text style={{ fontFamily: 'serif', fontSize: '18px' }}>
							To jest dla mnie niezwykle satysfakcjonujące, widzieć, jak moje
							wizje stają się rzeczywistością i przynosić radość i inspirację
							innym. Bycie projektantką wnętrz i wizualizatorką to nie tylko
							zawód, ale także sposób wyrażania swojej twórczej duszy i dawania
							ludziom możliwości odkrywania piękna w swoim otoczeniu. To jest
							to, co napędza mnie do działania każdego dnia i czyni moje życie
							pełnym pasji i spełnienia.
						</Card.Text>
					</Card.Body>
				</Card>
			</div> */}
		</Layout>
	);
};

export default About;
