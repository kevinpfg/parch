const CARDS = {
  "verdad": [
    "Confiese: ¿a quién del parche le daría un beso si tuviera que escoger ya mismo?",
    "¿Cuál de sus ex todavía podría hacerlo caer con un solo mensaje?",
    "¿A quién le ha coqueteado solo por atención, sin tener intención seria?",
    "¿Cuál es la mentira que sostiene desde hace tanto que ya casi se la cree?",
    "¿Quién del parche sería su peor decisión romántica… pero igual le daría curiosidad?",
    "¿Ha sido la segunda opción de alguien o ha tenido a alguien de segunda opción? Cuente sin nombres si prefiere.",
    "¿Cuál es el mensaje más intenso que ha escrito y borrado para no quedar como intenso/a?",
    "¿Qué persona revisa en redes más de lo que admitiría en voz alta?",
    "¿Alguna vez se metió con alguien sabiendo que iba a traer chisme? ¿Valió la pena?",
    "¿Qué secreto amoroso suyo haría que el parche gritara ‘¡yo sabía!’?",
    "¿A quién del grupo no le confiaría jamás el celular desbloqueado y por qué?",
    "¿Cuál ha sido su mayor show de celos que ahora le da pena recordar?",
    "¿Ha hablado con dos personas a la vez diciéndole a cada una que era la única?",
    "¿Qué red flag suya espantaría a alguien que apenas lo está conociendo?",
    "¿Cuál fue la indirecta más obvia que lanzó y nadie le copió?",
    "¿A quién le daría una segunda oportunidad aunque sus amigos le digan que no sea bobo/a?",
    "¿Qué amistad cree que se dañaría si se supiera todo el chisme que hay detrás?",
    "¿Cuál fue la peor excusa que inventó para ocultar con quién estaba?",
    "¿A quién le tiene ganas de escribirle, pero el orgullo no lo deja?",
    "¿Cuál es el rechazo más humillante que ha vivido y qué hizo después para disimular?",
    "¿Ha fingido que alguien no le importa mientras esperaba que le escribiera? Cuente.",
    "¿Cuál fue el peor ‘casi algo’ y quién dañó la vuelta?",
    "¿Qué persona le cae mal por una razón tan boba que le daría pena confesarla?",
    "¿Cuál ha sido su peor embarrada por mandar un pantallazo al chat equivocado?",
    "¿Qué chisme del parche conoce y lleva meses aguantándose las ganas de contar?",
    "¿Quién del grupo cree que tiene más cuento que hechos para conquistar?",
    "¿Qué cosa ha hecho por llamar la atención de alguien y hoy niega rotundamente?",
    "¿Ha vuelto con alguien por soledad, aburrimiento o puro ego? ¿Cuál fue la excusa que se dio?",
    "¿Qué ex o casi algo le dolería ver feliz con otra persona?",
    "¿Qué mentira contó para parecer más interesante en una primera cita?",
    "¿Cuál ha sido su momento más tóxico: revisar, reclamar, tirar indirectas o desaparecer?",
    "¿Quién del parche le parece más probable que tenga un romance secreto con alguien de aquí?",
    "¿Qué captura de pantalla de su chat le daría más miedo que vieran sus amigos?",
    "¿Qué persona le gusta más de lo que demuestra y qué señal lo delata?",
    "¿Cuál es la verdad incómoda que el parche debería decirle de frente, con respeto?",
    "¿Alguna vez fingió saber de un tema para impresionar a alguien? ¿Cuál?",
    "¿Cuál es el apodo más cruel que le han puesto y por qué?",
    "¿Qué amigo sería el primero en revelar un secreto sin querer?",
    "Si descubre que dos del parche se gustan, ¿les ayuda a cuadrarse o arma comité de chisme?",
    "¿Qué cumplido le encanta recibir, pero se hace el/la que no le importa?",
    "¿Qué cosa de su vida no subiría ni por un millón, porque se le cae la fachada?",
    "¿Qué maña suya haría que una pareja dijera “no, con este man/esta vieja no puedo”?",
    "¿Alguna vez ha vuelto a hablar con alguien solo porque estaba aburrido?",
    "¿Cuál ha sido su peor decisión por seguirle la corriente al parche?",
    "¿Qué famoso/a es su gusto culposo y qué explicación tan mala daría para defenderlo?",
    "¿Qué locura hizo para conseguir una cita y ahora niega que fue usted?",
    "¿Cuál es el secreto más inocente que le guarda a alguien de este grupo? Puede pasar.",
    "¿Qué le da celos aunque usted mismo sepa que no tiene ni vela en ese entierro?",
    "¿A quién del parche elegiría para que le organice una cita a ciegas?",
    "Sin decir nombres, ¿qué señal obvia de que alguien gustaba de usted no captó?",
    "¿Cuál es el plan más rolo que le parece perfecto: café, caminata por la 7.ª o charla hasta tarde?",
    "¿Qué canción pone a todo volumen cuando va por la ciudad?",
    "¿Cuál ha sido su oso más grande en TransMilenio?",
    "¿Qué excusa ha usado para no salir del parche un viernes?",
    "¿Quién del grupo sería el mejor guía turístico por Bogotá?",
    "¿Qué lugar de Bogotá le trae recuerdos con alguien que todavía le mueve el piso?",
    "¿Qué comida callejera defendería con la vida: empanada, salchipapa o arepa?",
    "¿Quién se demora tanto arreglándose que cuando llega ya están cerrando el sitio?",
    "Muéstrele al parche el paso de reguetón que usted cree que le sale brutal, pero seguro necesita revisión técnica.",
    "¿Qué plan barato le parece mejor que una rumba cara?",
    "¿Quién se pierde con Google Maps abierto y aun así insiste en que sí sabe llegar?",
    "¿Qué pinta o moda usó creyéndose una estrella y hoy le da pena hasta ver las fotos?",
    "¿Qué talento presume tener, pero el parche todavía no le ha visto demostrar?",
    "¿A quién llamaría primero si se varara lejos de casa?",
    "¿Qué frase rola usa tanto que el parche debería cobrarle cada vez que la diga?",
    "¿Cuál fue la última bobada que le hizo reír sin parar?",
    "¿Quién sería famoso por filtrar un chisme y después pedir que no lo repitan?",
    "¿Qué canción le sabe completa aunque le dé pena admitirlo?",
    "¿En qué botó plata por pura pinta y después quedó comiendo arroz con huevo?",
    "¿Quién del parche tiene más labia para pedir una rebaja?",
    "¿Cuál es su recuerdo favorito con este grupo?",
    "¿Qué plan cancelado terminó siendo la mejor decisión?",
    "¿Qué cosa le da pena pedir en una tienda?",
    "¿Quién del parche se descompone primero si le quitan el celular y los chismes?",
    "¿Cuál mensaje mandó al chat equivocado y qué tan rápido intentó borrarlo?",
    "¿Qué apodo del parche le queda perfecto a alguien?",
    "¿Quién se ríe en el peor momento?",
    "¿Qué lugar de Bogotá está sobrevalorado y usted finge que le encanta para no quedar mal?",
    "¿Qué lugar de Bogotá recomienda con los ojos cerrados?",
    "¿Cuál es su peor hábito cuando está enguayabado emocionalmente?",
    "¿Quién del parche sería el primero en llegar tarde a su propia boda?",
    "¿Qué plan haría en Bogotá con aguacero, frío y TransMi lleno, porque igual vale la pena?",
    "¿Qué mentira piadosa dice cuando no quiere prestar algo?",
    "¿Qué verdad sobre usted sabe todo el mundo menos usted, según el parche?",
    "¿Con quién viajaría y a quién jamás le daría las llaves del Airbnb?",
    "¿Cuál ha sido su peor corte de pelo?",
    "¿Qué meme representa su vida esta semana?",
    "¿Qué comida jamás compartiría ni con su mejor amigo?",
    "¿Quién del parche sería el mejor negociando en San Victorino?",
    "¿Qué hábito suyo desespera a sus amigos?",
    "¿Qué es lo más raro que ha hecho por no perder una apuesta?",
    "¿Qué plan de domingo le recarga las pilas?",
    "¿Quién tiene cara de saber un chisme durísimo y está esperando que le rueguen para contarlo?",
    "¿Qué canción no puede faltar en una reunión del parche?",
    "¿Qué dice que va a aprender cada año y sigue sin mover un dedo?",
    "¿Qué momento de colegio recuerda y todavía le da risa?",
    "Cuente la vez que se bajó donde no era o terminó en una estación que ni sabía que existía.",
    "¿Quién del parche sería el mejor alcalde por un día?",
    "¿Qué frase le gustaría que fuera el lema oficial del grupo?",
    "¿Qué recuerdo con sus amigos repetiría una vez más?",
    '¿Cuál del parche le parece más atractivo y qué le ve?',
    '¿Con quién de aquí tendría una cita sin pensarlo tanto?',
    '¿A quién le respondería un mensaje a las 2 de la mañana aunque juró que no?',
    '¿Cuál es la mentira más grande que ha dicho para salir de una cita?',
    '¿Ha coqueteado con alguien solo para darle celos a otra persona?',
    '¿Cuál es el peor oso que ha hecho intentando conquistar?',
    '¿Quién de aquí sería su cómplice para una escapada de fin de semana?',
    '¿Qué persona le sigue moviendo el piso aunque diga que ya la superó?',
    '¿Cuál fue el último perfil que stalkeó y por qué?',
    '¿Ha revisado el celular de alguien sin permiso?',
    '¿Qué secreto suyo sorprendería más a este grupo?',
    '¿A quién del parche no le presentaría jamás a su familia?',
    '¿Qué red flag ha perdonado por pura atracción?',
    '¿Ha tenido dos conversaciones románticas al tiempo y se le cruzaron los mensajes?',
    '¿Qué ex volvería a buscar si supiera que nadie se enteraría?',
    '¿Qué es lo más atrevido que ha escrito por chat y luego borró?',
    '¿Quién de aquí cree que besa mejor, por pura intuición?',
    '¿Cuál es la excusa más descarada que ha usado para desaparecer?',
    '¿Ha fingido estar ocupado para no responderle a alguien que sí le gusta?',
    '¿Qué amistad del grupo cree que podría convertirse en algo más?',
    '¿Qué comentario del parche le dolió, aunque se hizo el que no?',
    '¿Cuál ha sido su peor tusa y qué hizo que hoy le da risa?',
    '¿A quién le daría una oportunidad solo por la química?',
    '¿Cuál es su gusto culposo que jamás pondría en una historia?',
    '¿Qué fue lo más inmaduro que hizo por celos?',
    '¿Qué persona le cae mal porque sabe algo que usted hizo?',
    '¿Cuál fue la última indirecta que publicó pensando en alguien?',
    '¿A quién le ha dado falsas esperanzas sin querer o queriendo?',
    '¿Qué cosa de su historial amoroso no contaría en una primera cita?',
    '¿Qué amistad ha descuidado por estar detrás de alguien?',
    '¿Cuál fue la peor decisión tomada por calentura o impulso?',
    '¿Qué persona del grupo tiene más pinta de tener un romance escondido?',
    '¿Qué mensaje le daría pena que leyeran en voz alta?',
    '¿Ha vuelto con alguien sabiendo que iba a terminar igual?',
    '¿Cuál es su mayor contradicción cuando está tragado?',
    '¿Qué persona le tiene ganas pero no se atreve a decirlo?',
    '¿Qué mentira sobre usted se volvió difícil de sostener?',
    '¿Cuál fue la vez que más se hizo el interesante y quedó fue en ridículo?',
    '¿Qué hábito suyo sería insoportable para una pareja?',
    '¿Quién del grupo sería su peor socio para guardar un secreto?',
    '¿Qué cosa hace por aprobación y le cuesta admitir?',
    '¿A quién bloquearía y desbloquearía en menos de una semana?',
    '¿Qué rumor sobre usted le gustaría aclarar de una vez?',
    '¿Cuál ha sido su peor pelea por una bobada?',
    '¿Qué persona le ha dado más señales confusas?',
    '¿Qué haría si descubre que dos personas del parche hablan mal de usted?',
    '¿Qué plan romántico le daría pena proponer pero sí quisiera hacer?',
    '¿Cuál es su mayor talento para meterse en problemas amorosos?',
    '¿Qué pregunta teme que le hagan esta noche?',
    '¿Qué verdad del parche cree que todos saben menos el protagonista?',
],
  "reto": [
    "Haga una confesión dramática de amor a la persona que el grupo elija, sin tocarla ni incomodarla.",
    "Improvise una indirecta tan descarada que parezca estado de WhatsApp a las 2 a. m.",
    "Venda su peor red flag como si fuera una cualidad irresistible durante 30 segundos.",
    "Recree cómo actúa cuando le gusta alguien: mirar historias, escribir, borrar y volver a escribir.",
    "Haga un discurso de ruptura con una silla como si le hubiera sido infiel con otra silla.",
    "Deje que el parche le ponga una frase para su estado y léala como si fuera una indirecta real.",
    "Haga un freestyle de 20 segundos exponiendo sus propias embarradas; sin atacar inseguridades ajenas.",
    "Actúe cómo llega al lugar cuando sabe que va a encontrarse con su crush.",
    "Defienda por 30 segundos por qué usted sería una pareja complicada, usando pruebas ficticias.",
    "Haga una llamada imaginaria a su ex para pedirle que le devuelva la dignidad.",
    "Imite el audio de alguien diciendo ‘ya voy llegando’ cuando ni siquiera se ha bañado.",
    "Deje que el grupo elija tres emojis y arme con ellos una indirecta de novela.",
    "Cuente una historia falsa de su vida amorosa y deje que el grupo interrogue para descubrir la mentira.",
    "Haga una audición para el papel de la persona más intensa del parche.",
    "En 15 segundos, convierta una embarrada suya en una historia donde usted queda como héroe.",
    "Dedique una canción de despecho a un objeto cercano, con sentimiento de concierto en el Campín.",
    "Haga una escena de celos contra el Wi-Fi por prestarle más atención al celular que a usted.",
    "Diga tres frases de conquista: una buena, una terrible y una que dé pena ajena.",
    "Interprete cómo se hace el/la indiferente después de revisar si esa persona vio su historia.",
    "Deje que el grupo le invente una bio de app de citas y léala como si fuera su perfil oficial.",
    "Haga un comercial de 20 segundos: ‘salga conmigo, paquete con red flags incluidas’.",
    "Actúe como si acabara de pillar una indirecta en redes y estuviera investigando el caso.",
    "Mande un saludo ficticio de voz a su ‘casi algo’ imaginario; no tiene que enviárselo a nadie real.",
    "Haga una pelea de novela con una chaqueta porque le ocultó la verdad.",
    "Defienda una opinión impopular del parche durante 30 segundos mientras todos le hacen preguntas.",
    "Imite a quien dice ‘no estoy celoso/a’ con la cara más celosa posible.",
    "Haga un tutorial de cómo arruinar una cita en tres pasos, actuándolo.",
    "Convierta el chisme más inocente de la noche en un avance de serie dramática.",
    "Haga una declaración de campaña para que lo elijan ‘el más peligroso para el corazón’.",
    "Diga una frase coqueta con cinco emociones diferentes: seguridad, pena, rabia, tristeza y orgullo.",
    "Recree la cara que pone cuando ve que su crush subió una foto con alguien más.",
    "Improvice una excusa absurda para explicar por qué dejó a alguien en visto tres días.",
    "Haga un rap de 20 segundos sobre su historial de malas decisiones amorosas.",
    "Actúe una escena donde lo descubren echando chisme y trata de salvarse con una mentira pésima.",
    "Pida perdón a todo el parche por una embarrada ficticia como si estuviera en rueda de prensa.",
    "Describa al grupo como si fuera el elenco de una serie dramática.",
    "Haga una declaración de guerra a los trancones de Bogotá como héroe de película.",
    "Hable durante una ronda como narrador de documental sobre el parche.",
    "Invente una excusa para explicar por qué llegó dos horas tarde a una cita ficticia.",
    "Haga una escena de ruptura con su zapato como si fuera una relación de años.",
    "Diga un trabalenguas tres veces aumentando la velocidad, sin forzarse si se traba.",
    "Haga un saludo personalizado y exagerado para cada jugador.",
    "Venda su talento más inútil como si fuera una habilidad de superhéroe.",
    "Imite a alguien intentando hacerse el interesante en una fiesta.",
    "Haga una mini serenata de 15 segundos a quien acepte recibirla.",
    "Actúe como si acabara de ganar un premio internacional por llegar tarde.",
    "Haga una pose de portada de álbum y deje que el grupo invente el título.",
    "Dé una clase exprés de cómo sobrevivir a un domingo de guayabo emocional, sin beber nada.",
    "Haga una escena de novela con una traición inventada y un giro inesperado.",
    "Cierre con un brindis imaginario por el parche y un lema que todos puedan repetir.",
    "Imite a alguien tratando de subirse al bus cuando ya va lleno, sin empujar a nadie.",
    "Venda una empanada imaginaria como si fuera un manjar de cinco estrellas.",
    "Invente un comercial para convencer al parche de caminar por la Séptima.",
    "Haga una narración épica de alguien buscando señal en el celular.",
    "Cree un paso de baile llamado ‘el TransMi’ y enséñelo al grupo.",
    "Diga ‘qué más pues, mi pez’ con cinco emociones distintas.",
    "Improvise un rap usando ‘Bogotá’, ‘tinto’ y ‘parche’.",
    "Haga una pasarela como si estuviera cruzando la Plaza de Bolívar.",
    "Imite el sonido de una alarma de bus y anuncie la próxima parada inventada.",
    "Cuente un chiste malo con cara seria; el grupo califica el descaro.",
    "Haga una publicidad de 20 segundos para vender un chicle usado imaginario.",
    "Presente a cada persona del parche como si fuera una estrella de fútbol.",
    "Invente una receta elegante con los ingredientes de una salchipapa imaginaria.",
    "Haga una escena de novela porque alguien se comió su última papa.",
    "Diga un trabalenguas como comentarista de fútbol.",
    "Convierta una queja sobre el trancón en un poema romántico.",
    "Haga una imitación amistosa de alguien diciendo ‘ya voy llegando’ cuando apenas sale.",
    "Inventen entre todos un saludo secreto y usted debe estrenarlo.",
    "Describa su zapato como si fuera el último celular del mercado.",
    "Haga una mini entrevista a una silla sobre la vida en Bogotá.",
    "Baile diez segundos como si hubiera ganado una rifa del barrio.",
    "Dé un discurso para que el parche elija la empanada como comida oficial.",
    "Represente en cámara lenta cuando se le cae el internet en plena videollamada.",
    "Invente un eslogan para el grupo que rime con ‘parche’.",
    "Haga de guía turístico y recomiende tres lugares inventados de Bogotá.",
    "Imite a un vendedor de bus ofreciendo un producto absurdo, con respeto.",
    "Cante una canción conocida como si fuera himno de estadio.",
    "Haga una pose de portada de álbum titulada ‘Plan tranqui que se salió de control’.",
    "Explique cómo sobrevivir a una lluvia bogotana sin paraguas, en tono de documental.",
    "Haga un tutorial express para pedir tinto como experto catador.",
    "Invente un paso de baile inspirado en esquivar charcos.",
    "Actúe como presentador anunciando que llegó la pizza para todo el parche.",
    "Haga una declaración de amor dramática a una arepa imaginaria.",
    "Narre cómo alguien busca las llaves como si fuera una final mundial.",
    "Invente una noticia absurda sobre el clima de Bogotá.",
    "Diga cinco palabras rolas sin repetir y arme una frase con ellas.",
    "Haga un brindis imaginario por las amistades que sí contestan el chat.",
    "Presente al jugador de su derecha como el campeón mundial de la recocha.",
    "Haga una escena en la que perdió el bus por mirar un meme.",
    "Invente una coreografía de tres pasos para celebrar que llegó el viernes.",
    "Venda el objeto más cercano como recuerdo turístico de Bogotá.",
    "Hable 20 segundos como locutor de radio anunciando el plan del parche.",
    "Haga una imitación de alguien buscando dónde sentarse en un bus lleno.",
    "Invente un apodo amable para usted mismo y explique su origen falso.",
    "Dé una clase de cómo posar para una foto grupal sin cerrar los ojos.",
    "Represente una discusión entre una sombrilla y una chaqueta en día de lluvia.",
    "Cree una porra de fútbol para celebrar que todos llegaron.",
    "Haga una escena de acción tratando de salvar la última tajada de pizza.",
    "Explique por qué su barrio merece tener una estatua suya, en tono de broma.",
    "Cierre con una frase épica que haga que todos digan: ‘¡qué chimba de parche!’",
    'Imite cómo coquetea cuando ya se tomó confianza, sin tocar a nadie.',
    'Haga una pasarela de entrada como si todo el parche hubiera pagado por verlo.',
    'Improvisa una excusa para explicar por qué le dio like a una foto de hace tres años.',
    'Venda su peor defecto como si fuera el mejor partido de la ciudad.',
    'Haga una declaración de amor dramática a una silla durante 20 segundos.',
    'Cante el coro de una canción de despecho con sentimiento de final de novela.',
    'Deje que el grupo escoja tres palabras y arme una frase de conquista con ellas.',
    'Imite su reacción cuando alguien que le gusta le dice “tenemos que hablar”.',
    'Haga una entrevista de alfombra roja a la persona de su derecha.',
    'Baila 15 segundos el género que el grupo elija; puede cambiar el paso si no se siente cómodo.',
    'Actúe cómo presume que ya superó a su ex mientras revisa sus historias.',
    'Defienda su peor decisión amorosa como si fuera un abogado estrella.',
    'Haga un rap de 20 segundos usando los nombres de tres integrantes.',
    'Invente una indirecta de estado que sea demasiado obvia para pasar desapercibida.',
    'Recree cómo se comporta cuando está celoso pero quiere disimular.',
    'Imite a alguien mandando “jajaja” mientras está furioso por dentro.',
    'Haga un anuncio de venta de su corazón con precio, garantía y defectos incluidos.',
    'Diga un piropo terrible y luego intente arreglarlo con otro mejor.',
    'Actúe una pelea con el Wi-Fi porque lo dejó en visto.',
    'Presente al parche como si fuera el elenco de un reality lleno de drama.',
    'Haga una escena de alguien que llega tarde y aun así exige que lo esperen.',
    'Inventen un apodo de luchador para usted y haga su entrada al ring.',
    'Haga playback de 15 segundos como estrella de reguetón.',
    'Cuente una historia cotidiana como si fuera el chisme más escandaloso del año.',
    'Haga una imitación amable de su propia forma de reírse.',
    'Pida perdón al grupo por una embarrada ficticia con lágrimas de novela.',
    'Haga una campaña de 20 segundos para que lo nombren el más pinta del parche.',
    'Recree el momento de abrir el chat equivocado y entrar en pánico.',
    'Haga un tutorial acelerado de cómo arruinar una primera cita.',
    'Invente una coreografía sencilla y enséñesela a dos voluntarios.',
    'Responda durante una ronda como si estuviera en una entrevista de Miss Universo.',
    'Haga un comercial de su talento más inútil como si costara millones.',
    'Lance tres indirectas inventadas sin mencionar a nadie real.',
    'Haga una narración deportiva de alguien caminando hasta la puerta.',
    'Interprete a alguien que dice “yo invito” y luego busca monedas.',
    'Cree un grito de guerra para el parche y haga que todos lo repitan.',
    'Haga una serenata de despecho a un objeto que el grupo elija.',
    'Imite a un influencer dando consejos que claramente no sigue.',
    'Diga su frase de conquista más mala con confianza absoluta.',
    'Haga una pose de portada de álbum y deje que el grupo invente el título.',
    'Actúe una llamada ficticia donde intenta recuperar algo que perdió por orgullo.',
    'En 15 segundos, convenza al grupo de que usted sería un buen ex.',
    'Haga una mini batalla de baile con un voluntario, sin contacto físico.',
    'Diga cinco cumplidos rápidos y sinceros a distintas personas.',
    'Represente a alguien pillado echando chisme y tratando de cambiar el tema.',
    'Improvisa un brindis épico por las malas decisiones que dejan buenas historias.',
    'Haga un noticiero sobre el drama ficticio más reciente del parche.',
    'Imite la cara que pone cuando ve que su crush subió foto con alguien.',
    'Invente un paso de baile llamado “el bus va lleno” y enséñelo.',
    'Haga una audición de 20 segundos para ser protagonista de una novela.',
    'Cierre con una frase tan dramática que parezca final de temporada.',
],
  "castigo": [
    "Durante dos rondas, cada vez que diga ‘yo no fui’, el parche puede responder ‘ajá, claro’; sostenga el personaje.",
    "Haga una rueda de prensa explicando su peor red flag como si fuera un escándalo nacional.",
    "Durante un turno, narre sus decisiones como documental de alguien que no aprende de sus errores.",
    "El parche le asigna un apodo de novela y usted debe presentarse con él durante dos rondas; sin insultos personales.",
    "Represente una disculpa dramática por una embarrada amorosa ficticia, con lágrimas imaginarias incluidas.",
    "Durante 30 segundos, defienda la peor excusa para dejar a alguien en visto como si fuera abogado/a.",
    "Cada vez que alguien diga ‘chisme’, haga cara de inocente y diga ‘yo no sé nada’.",
    "Haga un brindis solemne por todas las decisiones que juró no repetir y repitió.",
    "Durante una ronda, hable como villano de novela que acaba de descubrir que lo dejaron en visto.",
    "Venda su historial de malas decisiones como una experiencia premium que nadie debería comprar.",
    "Haga una escena de reconciliación con su dignidad perdida después de mandar un mensaje intenso.",
    "Durante 30 segundos, responda como influencer que da consejos amorosos aunque su vida sea un caos ficticio.",
    "Haga una confesión falsa y exagerada al grupo; después revele que era inventada.",
    "Durante una ronda, cada frase debe empezar con ‘en mi defensa…’.",
    "Interprete a alguien que dice que ya superó a su ex, pero conoce hasta sus horarios de conexión.",
    "Haga una serenata de despecho al objeto que tenga más cerca.",
    "Durante un minuto, anuncie cada decisión como noticia urgente de última hora.",
    "Pida perdón públicamente por su red flag más graciosa, sin revelar nada que no quiera compartir.",
    "Haga una pose de portada titulada ‘yo sabía que era mala idea’ y manténgala 15 segundos.",
    "Durante una ronda, cada vez que alguien diga su nombre, responda como estrella descubierta por paparazzi.",
    "Explique por qué merece un premio a la persona que más se complica sola, con tres argumentos absurdos.",
    "Haga un juicio ficticio contra su orgullo: el grupo presenta cargos y usted se defiende.",
    "Durante 30 segundos, hable como GPS guiando a alguien directo hacia otra mala decisión amorosa.",
    "Imite la reacción de alguien que ve una historia y luego dice que no estaba pendiente.",
    "Haga un anuncio oficial de que deja las indirectas… y termine lanzando una indirecta inventada.",
    "Durante una ronda, termine sus frases con ‘y aun así volví’.",
    "Represente el momento en que alguien dice ‘solo somos amigos’ y todo el mundo sabe que no.",
    "Haga un tutorial exprés de cómo fingir tranquilidad cuando por dentro está en crisis por un mensaje.",
    "Pida una orden de captura ficticia contra quien le robó el corazón, sin mencionar personas reales.",
    "Durante una ronda, reaccione a cada consejo del parche como protagonista de una novela turca.",
    "Haga una defensa de 20 segundos de su peor embarrada como si estuviera ante un juez.",
    "Invente un titular de periódico sobre su vida amorosa y léalo con voz de noticiero.",
    "Durante un turno, cada respuesta debe incluir ‘mi abogado me recomienda no declarar’.",
    "Haga una escena de despedida épica de un casi algo imaginario, como final de temporada.",
    "Cierre con un discurso de aceptación del premio ‘más probable que vuelva a caer’.",
    "Cuente una historia inventada sobre una empanada que cambió su vida.",
    "El grupo elige un género musical y usted debe anunciar el siguiente turno como cantante de ese género.",
    "Haga una mini rueda de prensa explicando por qué perdió una competencia imaginaria.",
    "Durante una ronda, use una palabra elegante para describir cosas cotidianas.",
    "Haga una pose de estatua durante 15 segundos; puede moverse si se siente incómodo.",
    "Invente un eslogan para cada jugador, manteniéndolo amable.",
    "Haga un tutorial de 15 segundos para doblar una servilleta como si fuera arte de lujo.",
    "Durante una ronda, hable como si estuviera narrando un documental de naturaleza.",
    "Haga una mini serenata a una bebida sin alcohol o a un objeto cercano.",
    "Diga un trabalenguas escogido por el grupo dos veces; puede cambiarlo si le incomoda.",
    "Haga una imitación amistosa de cómo alguien pide que le pasen algo.",
    "Invente una excusa absurdamente formal para pedir cinco minutos de descanso.",
    "Haga un discurso de agradecimiento por ganar el premio al más dramático.",
    "Durante 30 segundos, responda como si fuera una celebridad dando entrevistas.",
    "Cierre la penitencia con una reverencia y diga: ‘¡qué chimba de parche!’",
    "Durante la próxima ronda, termine cada frase con ‘mi llave’.",
    "Hable como narrador de fútbol durante 30 segundos.",
    "Haga una reverencia cada vez que alguien diga ‘parce’ durante un minuto.",
    "Durante un turno, anuncie sus acciones como si fueran noticias de última hora.",
    "Use voz de GPS para dar indicaciones desde su silla durante una ronda.",
    "Cada vez que se ría durante 30 segundos, diga ‘se tenía que decir’.",
    "Salude al siguiente jugador como si llegara a un concierto multitudinario.",
    "Durante una ronda, responda como presentador de un concurso de televisión.",
    "Haga una pose de foto de cédula cada vez que alguien diga su nombre durante 20 segundos.",
    "Use la palabra ‘bacano’ en tres frases seguidas.",
    "Durante un turno, hable como si estuviera comentando una carrera de ciclismo.",
    "Invente un título nobiliario divertido que el parche pueda usarle una ronda.",
    "Haga una mini rueda de prensa sobre por qué llegó tarde a un plan ficticio.",
    "Durante 30 segundos, describa todo como si fuera un documental de naturaleza.",
    "Haga una entrada triunfal antes de su siguiente turno.",
    "Diga tres cumplidos sinceros a personas diferentes del grupo.",
    "Durante una ronda, comience sus respuestas con ‘según mis cálculos’.",
    "Haga una pose de estatua durante 15 segundos, sin incomodarse.",
    "Presente su botella de agua como el invento del siglo.",
    "Durante una ronda, narre su turno como comentarista de partido.",
    "Invente un lema amable para la persona de su izquierda.",
    "Haga una despedida dramática cada vez que termine de hablar durante un turno.",
    "Diga una frase cotidiana con voz de villano de película.",
    "Durante 20 segundos, hable como locutor de una emisora juvenil.",
    "Haga un saludo personalizado y respetuoso a cada jugador.",
    "Explique con solemnidad por qué merece el premio al más recochero.",
    "Durante una ronda, responda con una rima cuando pueda.",
    "Haga una pose de portada de disco y sosténgala diez segundos.",
    "Use voz de comentarista para narrar cómo alguien toma agua.",
    "Invente una excusa formal para pedir cinco minutos de descanso.",
    "Durante 30 segundos, hable como si estuviera en cámara lenta.",
    "Haga una mini serenata a un objeto cercano.",
    "Diga ‘todo bien, todo bonito’ con tres emociones diferentes.",
    "Durante una ronda, anuncie cada turno como si fuera una estación de TransMilenio ficticia.",
    "Haga una entrevista imaginaria a su propio zapato.",
    "Cierre su siguiente turno con una reverencia y ‘gracias, mi gente’.",
    "Durante un minuto, trate al objeto más cercano como invitado VIP.",
    "Imite cómo alguien intenta no reírse en clase, sin señalar a nadie.",
    "Haga un discurso de agradecimiento por ganar un premio inventado.",
    "Durante una ronda, use tono de narrador de tráiler de película.",
    "Invente una palabra rola y úsela en dos frases.",
    "Haga una pose de superhéroe cada vez que termine una frase por 20 segundos.",
    "Anuncie el siguiente turno como si fuera la final de un campeonato.",
    "Durante 30 segundos, hable como un chef explicando una receta de empanadas imaginaria.",
    "Diga tres expresiones colombianas y explique su significado inventado.",
    "Haga un brindis imaginario por los amigos que siempre aparecen.",
    "Durante un turno, empiece con ‘oigan, les tengo un dato’.",
    "Represente una conversación entre una sombrilla y una nube bogotana.",
    "Haga una mini publicidad para promocionar el parche como el mejor de la ciudad.",
    "Termine diciendo: ‘¡Bogotá está fría, pero este parche está caliente!’",
      'Durante dos turnos, anuncie su llegada como estrella de reguetón.',
    'Deje que el grupo le asigne un título ridículo y úselo hasta su próximo turno.',
    'Haga una rueda de prensa defendiendo su peor red flag.',
    'Durante una ronda, cada frase debe empezar con “no es por echar chisme, pero…”.',
    'Cante 10 segundos de despecho mirando dramáticamente a una pared.',
    'Haga una entrada triunfal cada vez que vuelva a sentarse durante un minuto.',
    'Durante el próximo turno, hable como narrador de fútbol.',
    'Recree su peor excusa para llegar tarde y que el grupo califique la actuación.',
    'Haga una disculpa pública a su dignidad por sus decisiones amorosas.',
    'Durante dos rondas, responda “mi abogado me aconseja guardar silencio” una vez por turno.',
    'Ponga cara de inocente cada vez que alguien diga “chisme” durante 30 segundos.',
    'Haga una mini pasarela con el objeto que el grupo elija como accesorio.',
    'Dedique una canción de despecho a una botella de agua.',
    'Durante un turno, termine cada frase con “y volví a caer”.',
    'Deje que el grupo invente un titular sobre usted y léalo como noticiero.',
    'Haga un juicio ficticio contra su orgullo y defiéndase durante 20 segundos.',
    'Imite durante 15 segundos cómo actúa cuando quiere impresionar a alguien.',
    'Durante una ronda, cada vez que se ría diga “era parte del plan”.',
    'Venda su peor cita como si fuera una experiencia cinco estrellas.',
    'Haga una pose de villano cada vez que alguien mencione el amor por 30 segundos.',
    'Pida al grupo una ovación y agradezca como ganador de un premio.',
    'Durante un turno, hable como si estuviera transmitiendo en vivo a miles de seguidores.',
    'Haga una serenata a su zapato por haberlo acompañado toda la vida.',
    'Explique en 20 segundos por qué merece el premio al más intenso.',
    'Durante una ronda, use una palabra elegante para describir todo lo que vea.',
    'Actúe como si acabara de descubrir una traición ficticia de una empanada.',
    'Haga una declaración oficial prometiendo dejar las indirectas por 24 horas.',
    'Deje que el grupo escoja una emoción y manténgala en la cara durante 20 segundos.',
    'Durante un turno, presente cada respuesta como noticia urgente.',
    'Haga un anuncio de búsqueda y captura de su fuerza de voluntad perdida.',
    'Invente un himno para el parche y dirija el coro durante 15 segundos.',
    'Haga una escena de novela pidiendo una segunda oportunidad a una silla.',
    'Durante una ronda, salude a cada persona como si no la viera hace diez años.',
    'Interprete a alguien intentando ocultar que está tragado, exageradamente.',
    'Haga una reseña de una silla como si fuera un restaurante de lujo.',
    'Durante 30 segundos, narre sus movimientos como documental de animales.',
    'Diga tres frases de conquista terribles con total seguridad.',
    'Haga una rueda de prensa explicando por qué perdió una apuesta inventada.',
    'Durante un turno, convierta cualquier pregunta en una respuesta rimada si puede.',
    'Haga una pose de portada de disco cada vez que alguien diga su nombre.',
    'Pida disculpas al grupo por una embarrada inventada y acepte preguntas.',
    'Durante una ronda, llame “su excelencia” a quien tenga a la izquierda.',
    'Haga una publicidad de 15 segundos para vender su peor hábito.',
    'Recree en cámara lenta el momento en que se da cuenta de que mandó el chat equivocado.',
    'Durante 20 segundos, actúe como GPS que perdió la señal.',
    'Haga un brindis imaginario por las amistades que no juzgan las embarradas.',
    'Diga “yo controlo la situación” con cinco emociones distintas.',
    'Durante un turno, abra sus frases con “según fuentes muy confiables…”.',
    'Haga una entrada de luchador y anuncie su nombre artístico.',
    'Cierre el castigo con una reverencia y un grito de “¡qué chimba de parche!”.',
]
  ,"grupo": [
    "Todos inventen un saludo secreto para el parche y repítanlo juntos.",
    "Duelo de chistes: dos personas cuentan uno cada una; el grupo elige el más malo.",
    "Todos hagan una pose de portada de álbum y voten la más legendaria.",
    "En ronda, cada persona agrega una frase a una historia absurda.",
    "Dos voluntarios compiten por vender el mismo objeto como si fuera de lujo.",
    "Todos imiten una emoción y el jugador del turno debe adivinarla.",
    "El grupo crea un grito de guerra de cinco segundos.",
    "Todos digan un cumplido sincero a la persona de su derecha.",
    "Competencia de piedra, papel o tijera entre voluntarios; quien gane corona al campeón.",
    "Cada persona inventa un título de película para la noche de hoy."
  ]
};
const TYPE_LABELS = { verdad: "♡ VERDAD", reto: "ϟ RETO", castigo: "☠ CASTIGO", grupo: "👥 RETO GRUPAL" };
const TYPE_NAMES = { verdad: "VERDAD", reto: "RETO", castigo: "CASTIGO", grupo: "RETO GRUPAL" };
const TYPE_ORDER = ["verdad", "reto", "castigo", "grupo"];
let currentType = "verdad";
let currentCard = null;
let currentFilter = "todas";
let used = { verdad: [], reto: [], castigo: [], grupo: [] };
// Índices globales: una tarjeta no vuelve a salir en el modo sorpresa hasta usar las 310.
let usedGlobal = [];
let gameMode = "duos";
let playerNames = [];
let playerTurn = 0;
let history = [];
let scores = {};
let specialMode = "clasico";
let roundCount = 0, timerInterval = null, customCards = [], achievements = new Set();
let sessionStats = { played: 0, completed: 0, passed: 0 };
let toastTimer;
let favorites = [];
let playerProfiles = {};
let eventMessage = "";
let hotPotatoInterval = null;
let hotPotatoRemaining = 0;
let turnAnnouncementTimer = null;
let penaltyPending = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function loadHistory() {
  try { ["parcheRoloHistory","parcheRoloStats","parcheRoloAchievements","parcheRoloFavorites","parcheRoloSavedGame"].forEach(k => localStorage.removeItem(k)); } catch {}
  try { history = JSON.parse(sessionStorage.getItem("parcheRoloHistory") || "[]"); customCards = JSON.parse(localStorage.getItem("parcheRoloCustomCards") || "[]"); sessionStats = JSON.parse(sessionStorage.getItem("parcheRoloStats") || "null") || sessionStats; achievements = new Set(JSON.parse(sessionStorage.getItem("parcheRoloAchievements") || "[]")); favorites = JSON.parse(sessionStorage.getItem("parcheRoloFavorites") || "[]"); playerProfiles = JSON.parse(sessionStorage.getItem("parcheRoloProfiles") || "{}"); }
  catch { history = []; }
}
function saveHistory() {
  try { sessionStorage.setItem("parcheRoloHistory", JSON.stringify(history.slice(0, 100))); sessionStorage.setItem("parcheRoloStats", JSON.stringify(sessionStats)); localStorage.setItem("parcheRoloCustomCards", JSON.stringify(customCards)); sessionStorage.setItem("parcheRoloAchievements", JSON.stringify([...achievements])); sessionStorage.setItem("parcheRoloFavorites", JSON.stringify(favorites)); sessionStorage.setItem("parcheRoloProfiles", JSON.stringify(playerProfiles)); }
  catch {}
}
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
function goToScreen(id) {
  $$(".screen").forEach(s => s.classList.toggle("active", s.id === id));
  $$(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.screen === id));
  if (id === "libraryScreen") renderLibrary();
  if (id === "historyScreen") renderHistory();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function requiredPlayerCount() {
  return gameMode === "duos" ? 2 : gameMode === "trios" ? 3 : Number($("#groupSize")?.value || 4);
}
function renderPlayerFields() {
  const container = $("#playerFields");
  if (!container) return;
  const count = requiredPlayerCount();
  const oldValues = [...container.querySelectorAll("input")].map(input => input.value);
  container.innerHTML = Array.from({ length: count }, (_, i) => `
    <label class="player-field"><span>INTEGRANTE ${i + 1}</span>
      <input class="players-input player-name-input" type="text" maxlength="30" autocomplete="off" placeholder="Nombre del jugador ${i + 1}" value="${escapeHTML(oldValues[i] || playerNames[i] || "")}">
    </label>`).join("");
  container.querySelectorAll("input").forEach(input => input.addEventListener("input", refreshPlayers));
  refreshPlayers();
}
function refreshPlayers() {
  const inputs = $$(".player-name-input");
  playerNames = inputs.map(input => input.value.trim());
  const filled = playerNames.filter(Boolean).length;
  const normalized = playerNames.filter(Boolean).map(name => name.toLocaleLowerCase("es").trim());
  const hasDuplicates = new Set(normalized).size !== normalized.length;
  const hint = $("#modeHint");
  if (hint) hint.textContent = hasDuplicates
    ? "Cada integrante necesita un nombre distinto, parce."
    : filled === inputs.length
      ? `Perfecto: ${filled} integrantes listos para jugar.`
      : `Completa los ${inputs.length} nombres. Llevas ${filled} de ${inputs.length}.`;
  const begin = $("#beginGameButton");
  if (begin) begin.disabled = filled !== inputs.length || hasDuplicates;
  updateTurnIndicator();
}
function updateTurnIndicator() {
  const name = playerNames.length ? playerNames[playerTurn % playerNames.length] : "Jugador 1";
  const el = $("#turnIndicator");
  if (el) el.textContent = `TURNO: ${name}`;
  const announced = $("#turnAnnouncementName"); if (announced) announced.textContent = name;
  const announcement = $("#turnAnnouncement"); if (announcement) { announcement.setAttribute("aria-label", `Le toca a ${name}`); announcement.classList.remove("show"); void announcement.offsetWidth; announcement.classList.add("show"); clearTimeout(turnAnnouncementTimer); turnAnnouncementTimer = setTimeout(() => announcement.classList.remove("show"), 3200); }
  const eyebrow = $("#activePlayerEyebrow");
  const prompt = $("#activePlayerPrompt");
  if (eyebrow) eyebrow.textContent = `TURNO DE ${name.toLocaleUpperCase("es")}`;
  if (prompt) prompt.textContent = `${name}, escoge Verdad, Reto, Castigo o deja que salga una sorpresa.`;
  const modeLabel = $("#roundModeLabel");
  if (modeLabel) modeLabel.textContent = gameMode === "duos" ? "DÚOS" : gameMode === "trios" ? "TRÍOS" : "GRUPOS";
}
function renderScores(){
 const box=$("#scoreRows"); if(!box)return;
 const entries=playerNames.map(name=>({name,score:scores[name]||0})).sort((a,b)=>b.score-a.score);
 box.innerHTML=entries.length?entries.map((p,i)=>`<div class="score-row"><span>${i===0?"👑":i+1+"."} ${escapeHTML(p.name)}</span><b>${p.score} pts</b></div>`).join(""):"Registra los jugadores para ver el marcador.";
}
function awardPoint(){const name=playerNames[playerTurn%playerNames.length]; if(name){scores[name]=(scores[name]||0)+1;sessionStats.completed++;renderScores();checkAchievements();saveHistory();showToast(`¡+1 punto para ${name}!`);}}
function randomCategory(){return TYPE_ORDER[Math.floor(Math.random()*TYPE_ORDER.length)];}

function chooseCard(type, record = true) {
  // Solo la ruleta fuerza una categoría sorpresa. En Fiesta se permite tocar Verdad o Reto.
  if (hotPotatoInterval) { clearInterval(hotPotatoInterval); hotPotatoInterval = null; }
  const force = window.parcheNextForce; window.parcheNextForce = null;
  if (force === "sorpresa") type = null; else if (force === "grupo") type = "grupo";
  const surprise = !type;
  if (specialMode === "fiesta" && !type) { type = Math.random() < 0.5 ? "verdad" : "reto"; }
  const noRepeat = $("#noRepeatToggle").checked;
  const all = TYPE_ORDER.flatMap(t => [...CARDS[t], ...customCards.filter(c => c.type === t).map(c => c.text)].map((text, index) => ({ type: t, text, index, id: `${t}:${index}` })));
  const partyPool = specialMode === "fiesta" ? all.filter(card => card.type === "verdad" || card.type === "reto") : all;
  const smartQuery = (document.querySelector("#smartSearch")?.value || "").trim().toLocaleLowerCase("es");
  const smartType = document.querySelector("#smartType")?.value || "todas";
  const excludeFavs = !!document.querySelector("#avoidFavoritesToggle")?.checked;
  const smartFilter = card => (!smartQuery || card.text.toLocaleLowerCase("es").includes(smartQuery)) && (smartType === "todas" || card.type === smartType) && (!excludeFavs || !favorites.includes(card.id));
  const intensity = $("#intensitySelect")?.value || "todas";
  const intensityFilter = card => {
    if (intensity === "todas" || card.type === "grupo") return true;
    const len = CARDS[card.type]?.length || 1;
    if (card.index >= len) return true; // cartas propias
    const base = window.CHIMBA_BASE?.[card.type] ?? len;
    const isNew = card.index >= base;
    if (intensity === "chimba") return isNew;
    if (isNew) return intensity !== "suave";
    const third = base / 3;
    return intensity === "suave" ? card.index < third : intensity === "picante" ? card.index >= third && card.index < third * 2 : card.index >= third * 2;
  };

  let chosen;
  if (surprise) {
    let pool = partyPool.filter(card => intensityFilter(card) && smartFilter(card)); if (noRepeat) pool = pool.filter(card => !usedGlobal.includes(card.id));
    if (!pool.length && noRepeat) {
      usedGlobal = [];
      used = { verdad: [], reto: [], castigo: [], grupo: [] };
      pool = partyPool.filter(smartFilter);
      showToast("¡Salieron todas las cartas! Empezamos una nueva vuelta.");
    }
    if (!pool.length) { showToast("No hay cartas con esos filtros. Cambia la búsqueda o la categoría."); return; }
    chosen = pool[Math.floor(Math.random() * pool.length)];
    type = chosen.type;
  } else {
    const list = [...CARDS[type], ...customCards.filter(c => c.type === type).map(c => c.text)];
    let available = list.map((text, index) => ({ type, text, index, id: `${type}:${index}` }));
    if (noRepeat) available = available.filter(card => !usedGlobal.includes(card.id));
    available = available.filter(card => intensityFilter(card) && smartFilter(card));
    if (!available.length && noRepeat) {
      // Reinicia solo la categoría agotada, incluyendo sus identificadores globales.
      used[type] = [];
      usedGlobal = usedGlobal.filter(id => !id.startsWith(`${type}:`));
      available = list.map((text, index) => ({ type, text, index, id: `${type}:${index}` })).filter(intensityFilter);
      showToast(`Ya salieron todas las de ${TYPE_NAMES[type].toLowerCase()}. ¡Nueva vuelta!`);
    }
    if (!available.length) { showToast("No hay cartas de esa categoría con esos filtros."); return; }
    chosen = available[Math.floor(Math.random() * available.length)];
  }
  currentType = chosen.type;
  currentCard = { type: chosen.type, text: chosen.text, index: chosen.index };
  if (noRepeat) {
    if (!usedGlobal.includes(chosen.id)) usedGlobal.push(chosen.id);
    if (!used[chosen.type].includes(chosen.index)) used[chosen.type].push(chosen.index);
  }
  $("#gameCard").className = `game-card ${currentType}-theme`;
  $("#cardKicker").textContent = TYPE_LABELS[currentType];
  $("#questionText").textContent = currentCard.text;
  if ($("#turnAnnouncementName")) $("#turnAnnouncementName").textContent = playerNames.length ? playerNames[playerTurn % playerNames.length] : `Jugador ${playerTurn + 1}`;
  $("#cardProgress").style.width = `${Math.min(100, used[currentType].length / CARDS[currentType].length * 100)}%`;
  if (record) {
    sessionStats.played++;
    history.unshift({ ...currentCard, player: playerNames.length ? playerNames[playerTurn % playerNames.length] : `Turno ${playerTurn + 1}`, date: new Date().toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" }) });
    history = history.slice(0, 100);
    saveHistory();
  }
  updateTurnIndicator();
  renderScores();
  closeTaskModal();
  // Mostrar siempre la tarjeta elegida; antes Papa Caliente podía sacar una carta
  // sin cambiar de pantalla y parecía que los botones no respondían.
  goToScreen("cardScreen");
  startCardTimer();
  if ($("#soundSetting").checked) playBeep();
}
function startCardTimer(){
  clearInterval(timerInterval); timerInterval = null;
  const el = $("#cardTimer"); if (!el) return;
  const base = window.parcheLightning ? 10 : Number($("#timerSelect")?.value || 0);
  window.parcheLightning = false;
  el.classList.remove("urgent");
  if (!base) { el.hidden = true; return; }
  let left = base; el.hidden = false; el.textContent = "⏱ " + left + "s";
  timerInterval = setInterval(() => {
    left--; el.textContent = left > 0 ? "⏱ " + left + "s" : "⏰ ¡Tiempo!";
    if (left <= 5) el.classList.add("urgent");
    if (left <= 0) { clearInterval(timerInterval); timerInterval = null; playSoundEffect(); showToast("⏰ ¡Se acabó el tiempo! Cumple o pasa a penitencia."); try { navigator.vibrate && navigator.vibrate([200,80,200]); } catch {} }
  }, 1000);
}
function showTaskModal() {
  // Las preguntas se muestran en la tarjeta de la partida, no en una ventana a pantalla completa.
  closeTaskModal();
}

function closeTaskModal() {
  $("#taskModal").hidden = true;
  document.body.classList.remove("modal-open");
}

function selectedExtras(){return $$(".extra-toggle:checked").map(el=>el.value);}
function launchSelectedExtra(){
 const selected=selectedExtras().filter(id=>id!=="finalRoundPanel");
 if(!selected.length)return;
 // Los extras aparecen entre turnos; no interrumpen la tarjeta que se está jugando.
 const id=selected[Math.floor(Math.random()*selected.length)];
 if(id==="secretChismePanel"){secretAnswers=[];$("#secretAnswer").value="";$("#secretAnswers").textContent="";$("#secretProgress").textContent="Respuestas: 0";openFeature(id);}
 else if(id==="tribunalPanel"){tribunalVotes={};refreshTribunalCandidates();$("#tribunalResults").textContent="";$("#tribunalProgress").textContent="Votos emitidos: 0";openFeature(id);}
 else if(id==="quickTimerPanel"){clearInterval(quickTimerInterval);quickTimerLeft=Number($("#quickTimerDuration").value)||20;$("#quickTimerDisplay").textContent=quickTimerLeft;$("#quickTimerMessage").textContent="¡Reto extra! Pulsa iniciar cuando estén listos.";openFeature(id);}
 else if(id==="consequencePanel"){$("#consequenceResult").textContent="Gira la ruleta para sacar una penitencia.";openFeature(id);}
 else if(id==="rumbaPanel"){$("#rumbaCardText").textContent="Pulsa para sacar la primera carta.";openFeature(id);}
}
function advanceTurn() {
  penaltyPending = false; clearInterval(timerInterval); timerInterval = null;
  $("#turnAnnouncement")?.classList.remove("is-penalty");
  roundCount++;
  const limit = Number($("#roundLimit")?.value || 0) * Math.max(1, playerNames.length);
  if (limit && roundCount >= limit) { if(selectedExtras().includes("finalRoundPanel")) openFinalRound(); else showPodium(); return; }
  if (playerNames.length) playerTurn = (playerTurn + 1) % playerNames.length;
  else playerTurn++;
  updateTurnIndicator();
  triggerRoundEvent();
  saveGame(false);
  if (specialMode === "ruleta") { goToScreen("cardScreen"); spinRoulette(); }
  else goToScreen("categoryChoiceScreen");
  if (specialMode === "caliente") startHotPotato();
  if(selectedExtras().some(id=>id!=="finalRoundPanel")) setTimeout(launchSelectedExtra, 350);
}

function playBeep() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine"; osc.frequency.value = 660;
    gain.gain.setValueAtTime(.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .12);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + .12);
    osc.onended = () => ctx.close();
  } catch {}
}
function renderLibrary() {
  const query = ($("#searchInput")?.value || "").trim().toLocaleLowerCase("es");
  const all = TYPE_ORDER.flatMap(type => CARDS[type].map((text, i) => ({ type, text, i })));
  const filtered = all.filter(item => (currentFilter === "todas" || item.type === currentFilter) && item.text.toLocaleLowerCase("es").includes(query));
  const list = $("#libraryList");
  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state">No encontramos tarjetas con esa búsqueda, socio.</div>';
    return;
  }
  list.innerHTML = filtered.map(item => `
    <article class="list-card">
      <span class="list-number">${item.i + 1}</span>
      <div class="list-content"><span class="list-type ${item.type}">${TYPE_NAMES[item.type]}</span>${escapeHTML(item.text)}</div>
      <button class="icon-btn mini-play" data-type="${item.type}" data-index="${item.i}" aria-label="Jugar esta tarjeta">↗</button>
    </article>`).join("");
  $$(".mini-play").forEach(btn => btn.addEventListener("click", () => {
    const type = btn.dataset.type, index = Number(btn.dataset.index);
    currentCard = { type, index, text: CARDS[type][index] };
    currentType = type;
    $("#gameCard").className = `game-card ${type}-theme`;
    $("#cardKicker").textContent = TYPE_LABELS[type];
    $("#questionText").textContent = currentCard.text;
  if ($("#turnAnnouncementName")) $("#turnAnnouncementName").textContent = playerNames.length ? playerNames[playerTurn % playerNames.length] : `Jugador ${playerTurn + 1}`;
    history.unshift({ ...currentCard, date: new Date().toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" }) });
    history = history.slice(0, 100); saveHistory();
    updateTurnIndicator();
    showTaskModal();
  }));
}
function renderHistory() {
  const list = $("#historyList");
  if (!history.length) {
    list.innerHTML = '<div class="empty-state">Todavía no hay tarjetas jugadas. ¡De una, saque la primera!</div>';
    return;
  }
  list.innerHTML = history.map((item, i) => `
    <article class="list-card">
      <span class="list-number">${i + 1}</span>
      <div class="list-content"><span class="list-type ${item.type}">${TYPE_NAMES[item.type]}</span>${escapeHTML(item.text)}<div class="history-date">${escapeHTML(item.date || "")}</div></div>
    </article>`).join("");
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
}

$$("[data-screen]").forEach(button => button.addEventListener("click", () => goToScreen(button.dataset.screen)));
$("#startButton").addEventListener("click", () => goToScreen("playScreen"));
$("#howButton").addEventListener("click", () => goToScreen("howScreen"));
$("#aboutButton").addEventListener("click", () => goToScreen("howScreen"));
$$(".category-card").forEach(button => button.addEventListener("click", () => {
  // Al elegir una categoría se detiene el reloj de Papa Caliente para evitar
  // que una segunda carta reemplace la que el jugador acaba de escoger.
  if (hotPotatoInterval) { clearInterval(hotPotatoInterval); hotPotatoInterval = null; }
  chooseCard(button.dataset.type);
}));
$("#beginGameButton").addEventListener("click", () => {
  refreshPlayers();
  if (!playerNames.length || playerNames.some(name => !name)) {
    showToast("Completa la casilla de cada integrante, parce.");
    return;
  }
  if (new Set(playerNames.map(name => name.toLocaleLowerCase("es").trim())).size !== playerNames.length) {
    showToast("Pongan nombres distintos para que el marcador no se confunda.");
    return;
  }
  playerTurn = 0;
  scores = Object.fromEntries(playerNames.map(name => [name, 0]));
  renderScores();
  usedGlobal = [];
  used = { verdad: [], reto: [], castigo: [], grupo: [] };
  updateTurnIndicator();
  penaltyPending = false;
  if (specialMode === "ruleta") {
    goToScreen("cardScreen");
    spinRoulette();
  } else if (specialMode === "caliente") {
    goToScreen("categoryChoiceScreen");
    showToast("🥔 ¡Papa caliente! Pásense el celular; cuando se queme sale la tarjeta.");
    startHotPotato();
  } else if (specialMode === "fiesta") {
    goToScreen("categoryChoiceScreen");
    showToast("🎉 Modo Fiesta: solo cartas de parche para molestar y reírse.");
  } else {
    spinPlayerRoulette(true);
  }
  showToast(`¡Listos! La ruleta decide el arranque del parche.`);
});
$("#nextButton").addEventListener("click", () => { if (penaltyPending) penaltyPending = false; awardPoint(); closeTaskModal(); advanceTurn(); });
$("#skipButton").addEventListener("click", givePenalty);
$("#shuffleButton")?.remove();
$("#closeTaskModal").addEventListener("click", closeTaskModal);
$("#modalBackdrop").addEventListener("click", closeTaskModal);

$("#modalDoneButton").addEventListener("click", () => { penaltyPending = false; awardPoint(); closeTaskModal(); advanceTurn(); });
$("#modalPassButton")?.addEventListener("click", givePenalty);
document.addEventListener("keydown", event => { if (event.key === "Escape" && !$("#taskModal").hidden) closeTaskModal(); });
$("#groupSize").addEventListener("change", renderPlayerFields);
$$('.mode-option[data-mode]').forEach(button => button.addEventListener("click", () => {
  gameMode = button.dataset.mode;
  $$(".mode-option").forEach(item => item.classList.toggle("active", item === button));
  playerTurn = 0;
  $("#groupSizeControl").hidden = gameMode !== "grupos";
  renderPlayerFields();
  showToast(`Modo ${gameMode} seleccionado.`);
}));
$$(".filter").forEach(button => button.addEventListener("click", () => {
  currentFilter = button.dataset.filter;
  $$(".filter").forEach(b => b.classList.toggle("active", b === button));
  renderLibrary();
}));
$("#searchInput")?.addEventListener("input", renderLibrary);
$("#clearHistory").addEventListener("click", () => {
  if (confirm("¿Borramos el historial de este navegador?")) {
    history = []; saveHistory(); renderHistory(); showToast("Historial borrado.");
  }
});
$("#noRepeatToggle")?.addEventListener("change", e => {
  if (e.target.checked) showToast("No repetiremos tarjetas hasta usar las 310.");
  else showToast("La repetición está activada.");
});
$("#soundSetting")?.addEventListener("change", e => {
  $("#soundToggle").style.color = e.target.checked ? "var(--pink)" : "";
  showToast(e.target.checked ? "Sonidos activados." : "Sonidos desactivados.");
});
$("#soundToggle").addEventListener("click", () => {
  $("#soundSetting").checked = !$("#soundSetting").checked;
  $("#soundSetting").dispatchEvent(new Event("change"));
});
$("#effectsToggle").addEventListener("change", e => {
  document.body.classList.toggle("no-effects", !e.target.checked);
  showToast(e.target.checked ? "Efectos neón activados." : "Efectos neón desactivados.");
});
$("#shareButton").addEventListener("click", async () => {
  const data = { title: "Parche Rolo", text: "Parce, juguemos Verdad, Reto o Castigo. ¡Pura recocha rola!" };
  try {
    if (navigator.share) await navigator.share(data);
    else if (navigator.clipboard) { await navigator.clipboard.writeText(location.href); showToast("Enlace copiado. ¡Páselo al parche!"); }
    else showToast("Copie el enlace desde la barra del navegador y compártalo.");
  } catch (err) { if (err.name !== "AbortError") showToast("No se pudo compartir en este momento."); }
});

function checkAchievements(){
 const played=sessionStats.played||0; const done=sessionStats.completed||0;
 if(played>=1) achievements.add("Primera carta"); if(done>=5) achievements.add("Cinco cumplidas"); if(done>=10) achievements.add("Leyenda del parche");
 saveHistory();
}
function showPodium(){
 closeTaskModal(); clearInterval(timerInterval);
 const entries=playerNames.map(name=>({name,score:scores[name]||0})).sort((a,b)=>b.score-a.score);
 $("#podiumContent").innerHTML=entries.map((p,i)=>`<div class="podium-row rank-${i+1}"><b>${["🥇","🥈","🥉"][i]||"🎉"} ${escapeHTML(p.name)}</b><strong>${p.score} pts</strong></div>`).join("")||"Aún no hay resultados.";
 $("#statsSummary").textContent=`Tarjetas vistas: ${sessionStats.played}. Retos cumplidos: ${sessionStats.completed}. Logros: ${[...achievements].join(", ")||"todavía ninguno"}.`;
 $("#statsPanel").hidden=false;
}
function renderCustomCards(){
 const box=$("#customCardsList"); if(!box)return;
 box.innerHTML=customCards.length?customCards.map((c,i)=>`<div class="custom-card-row"><span><b>${TYPE_NAMES[c.type]||c.type}</b> · ${escapeHTML(c.text)}</span><button class="icon-btn" data-delete-custom="${i}" aria-label="Eliminar carta">×</button></div>`).join(""):'<p class="tiny-note">Todavía no has creado cartas.</p>';
 box.querySelectorAll("[data-delete-custom]").forEach(b=>b.addEventListener("click",()=>{customCards.splice(Number(b.dataset.deleteCustom),1);saveHistory();renderCustomCards();}));
}
function openCustomCards(){renderCustomCards();$("#customCardsPanel").hidden=false;}
function openStats(){showPodium();}
function spinRoulette(){
 const panel=$("#roulettePanel"), wheel=$("#rouletteWheel"), result=$("#rouletteResult");
 if (!playerNames.length) { showToast("Primero registra el parche."); return; }
 panel.hidden=false; wheel.textContent="🎯"; wheel.classList.remove("spinning"); void wheel.offsetWidth; wheel.classList.add("spinning");
 const choices=[{type:"verdad",label:"♡ VERDAD"},{type:"reto",label:"ϟ RETO"},{type:"castigo",label:"☠ CASTIGO"},{type:"grupo",label:"👥 RETO GRUPAL"}];
 const chosen=choices[Math.floor(Math.random()*choices.length)]; result.textContent=`La ruleta está buscando carta…`;
 setTimeout(()=>{wheel.textContent=chosen.label.split(" ")[0];result.textContent=`Salió: ${chosen.label}`;setTimeout(()=>{panel.hidden=true;chooseCard(chosen.type);},900);},1200);
}
function spinPlayerRoulette(openChoiceAfter = false){
 if (!playerNames.length) { showToast("Primero registra los nombres del parche."); return; }
 const panel=$("#roulettePanel"), wheel=$("#rouletteWheel"), result=$("#rouletteResult");
 panel.hidden=false; wheel.textContent="🎡"; wheel.classList.remove("spinning"); void wheel.offsetWidth; wheel.classList.add("spinning");
 const idx=Math.floor(Math.random()*playerNames.length); const chosen=playerNames[idx]; result.textContent="La ruleta está eligiendo quién arranca…";
 setTimeout(()=>{playerTurn=idx;updateTurnIndicator();panel.hidden=true;showToast(`🎡 ¡Le toca a ${chosen}!`);saveGame(false);if(openChoiceAfter)goToScreen("categoryChoiceScreen");},1200);
}
function givePenalty(){
 if (!currentCard || !playerNames.length) { showToast("Primero saca una carta en una partida activa."); return; }
 sessionStats.passed++; saveHistory(); penaltyPending=true;
 const baseC=($("#intensitySelect")?.value==="chimba")?(window.CHIMBA_BASE?.castigo||0):0;const list=[...CARDS.castigo.slice(baseC),...customCards.filter(c=>c.type==="castigo").map(c=>c.text)];
 const text=list[Math.floor(Math.random()*list.length)];
 currentType="castigo";currentCard={type:"castigo",text,index:Math.max(0,list.indexOf(text))};
 $("#gameCard").className="game-card castigo-theme";$("#cardKicker").textContent=TYPE_LABELS.castigo;$("#questionText").textContent=`PENITENCIA: ${text}`;
 if($("#turnAnnouncementName"))$("#turnAnnouncementName").textContent=playerNames[playerTurn%playerNames.length];
 $("#turnAnnouncement").classList.add("is-penalty");
 closeTaskModal();showTaskModal();startCardTimer();showToast(`Penitencia para ${playerNames[playerTurn%playerNames.length]}. Después sigue la próxima persona.`);
}


// Mejoras de esta edición: eventos, perfiles, filtros, exportación y recuperación local.
function triggerRoundEvent() {
  const events = [
    { text: "⚡ RONDA RELÁMPAGO: tienen 10 segundos para decidir.", points: 0 },
    { text: "✨ PUNTO DOBLE: la próxima tarjeta cumplida vale 2 puntos.", points: 2 },
    { text: "🎲 CAMBIO DE CATEGORÍA: la próxima tarjeta será sorpresa.", points: 0 },
    { text: "👥 RETO GRUPAL: la próxima tarjeta involucra a todo el parche.", points: 0 },
    { text: "🔁 GIRO DE TURNO: el siguiente jugador elige quién sigue.", points: 0 }
  ];
  const event = events[Math.floor(Math.random() * events.length)];
  eventMessage = event.text;
  const banner = $("#eventBanner"); if (banner) banner.textContent = eventMessage;
  if (event.points) window.parcheDoublePoints = true;
  if (event.text.includes("RELÁMPAGO")) window.parcheLightning = true;
  else if (event.text.includes("sorpresa")) window.parcheNextForce = "sorpresa";
  else if (event.text.includes("GRUPAL")) window.parcheNextForce = "grupo";
  else if (event.text.includes("GIRO")) setTimeout(() => spinPlayerRoulette(false), 700);
  showToast(eventMessage);
}
const originalAwardPoint = awardPoint;
awardPoint = function() {
  const player = playerNames[playerTurn % Math.max(1, playerNames.length)];
  if (window.parcheDoublePoints && player) {
    scores[player] = (scores[player] || 0) + 1;
    window.parcheDoublePoints = false;
  }
  originalAwardPoint();
};
function randomPlayer() {
  if (!playerNames.length) { showToast("Primero registra los nombres de tu parche."); return; }
  const idx = Math.floor(Math.random() * playerNames.length);
  playerTurn = idx; updateTurnIndicator(); saveGame(false);
  showToast(`🎯 Le toca al azar a ${playerNames[idx]} ¡que se mida!`);
}
function startHotPotato() {
  if (!playerNames.length) { showToast("Primero registra los jugadores."); return; }
  clearInterval(hotPotatoInterval);
  hotPotatoRemaining = Number($("#timerSelect")?.value || 15) || 15;
  showToast(`🥔 ¡Papa caliente! Pásenla. Quedan ${hotPotatoRemaining} segundos.`);
  hotPotatoInterval = setInterval(() => {
    hotPotatoRemaining--;
    if (hotPotatoRemaining <= 0) {
      clearInterval(hotPotatoInterval); hotPotatoInterval = null;
      const idx = Math.floor(Math.random() * playerNames.length); playerTurn = idx;
      updateTurnIndicator(); playSoundEffect();
      showToast(`🥔 ¡Se quemó! ${playerNames[idx]} recibe la tarjeta sorpresa.`);
      chooseCard(null);
    } else if (hotPotatoRemaining <= 5) showToast(`🥔 ¡${hotPotatoRemaining} segundos! Pásela, parce.`);
  }, 1000);
}
function renderProfilesEditor() { if (!$("#profilesEditor")) return;
  const box = $("#profilesEditor"); if (!box) return;
  if (!playerNames.length) { box.innerHTML = '<p class="tiny-note">Registra jugadores en la pantalla Jugar para editar sus perfiles.</p>'; return; }
  box.innerHTML = playerNames.map((name, i) => {
    const profile = playerProfiles[name] || {};
    return `<div class="profile-row"><label>${escapeHTML(name)}<input class="players-input profile-alias" data-player="${escapeHTML(name)}" maxlength="30" value="${escapeHTML(profile.alias || name)}" aria-label="Apodo de ${escapeHTML(name)}"></label><label>Color<select class="players-input profile-color" data-player="${escapeHTML(name)}"><option value="#ff2ca8" ${profile.color==="#ff2ca8"?'selected':''}>Rosa</option><option value="#9d5bff" ${profile.color==="#9d5bff"?'selected':''}>Morado</option><option value="#39d9ff" ${profile.color==="#39d9ff"?'selected':''}>Azul</option><option value="#ffbd35" ${profile.color==="#ffbd35"?'selected':''}>Dorado</option><option value="#55e6a5" ${profile.color==="#55e6a5"?'selected':''}>Verde</option></select></label><span>🏅 ${scores[name] || 0} pts</span></div>`;
  }).join("");
}
function saveProfiles() {
  $$(".profile-alias").forEach(input => {
    const name = input.dataset.player; playerProfiles[name] = playerProfiles[name] || {};
    playerProfiles[name].alias = input.value.trim() || name;
  });
  $$(".profile-color").forEach(input => {
    const name = input.dataset.player; playerProfiles[name] = playerProfiles[name] || {};
    playerProfiles[name].color = input.value;
  });
  saveHistory(); showToast("Perfiles guardados en este navegador.");
}
function saveGame(notify = true) {
  const snapshot = { version: 1, playerNames, playerTurn, scores, gameMode, roundCount, sessionStats, history, customCards, used, usedGlobal, favorites, playerProfiles, specialMode, savedAt: new Date().toISOString() };
  try { sessionStorage.setItem("parcheRoloSavedGame", JSON.stringify(snapshot)); if (notify) showToast("💾 Partida guardada en este navegador."); return true; }
  catch { if (notify) showToast("No se pudo guardar. Puede faltar espacio en el navegador."); return false; }
}
function resumeGame() {
  try {
    const data = JSON.parse(sessionStorage.getItem("parcheRoloSavedGame") || "null");
    if (!data || !Array.isArray(data.playerNames)) { showToast("No hay una partida guardada todavía."); return; }
    playerNames = data.playerNames; playerTurn = Number(data.playerTurn) || 0; scores = data.scores || {}; gameMode = data.gameMode || "duos"; roundCount = Number(data.roundCount) || 0;
    sessionStats = data.sessionStats || sessionStats; history = data.history || history; customCards = data.customCards || customCards; used = data.used || used; usedGlobal = data.usedGlobal || []; favorites = data.favorites || []; playerProfiles = data.playerProfiles || {}; specialMode = data.specialMode || "clasico";
    const modeBtn = $(`[data-mode="${gameMode}"]`); if (modeBtn) { $$("[data-mode]").forEach(b=>b.classList.toggle("active",b===modeBtn)); }
    if (gameMode === "grupos" && $("#groupSize")) $("#groupSize").value = String(Math.max(4, playerNames.length));
    renderPlayerFields(); saveHistory(); renderScores(); renderProfilesEditor(); renderHistory(); goToScreen("categoryChoiceScreen");
    showToast(`Partida recuperada (${playerNames.length} jugadores).`);
  } catch { showToast("El archivo de partida guardada no se pudo recuperar."); }
}
function exportCardsAndResults() {
  const payload = { app: "Parche Rolo", version: 1, exportedAt: new Date().toISOString(), customCards, history, scores, playerNames, favorites };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href=url; a.download="parche-rolo-cartas-resultados.json"; a.click(); URL.revokeObjectURL(url);
  showToast("Exportación JSON lista.");
}
function importCardsFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(String(reader.result));
      if (!data || !Array.isArray(data.customCards)) throw new Error("Formato");
      const valid = data.customCards.filter(c => c && TYPE_ORDER.includes(c.type) && typeof c.text === "string" && c.text.trim()).map(c=>({type:c.type,text:c.text.trim().slice(0,300)}));
      if (!valid.length) throw new Error("Sin cartas válidas");
      const keys = new Set(customCards.map(c=>`${c.type}|${c.text.toLowerCase()}`));
      valid.forEach(c=>{const key=`${c.type}|${c.text.toLowerCase()}`;if(!keys.has(key)){customCards.push(c);keys.add(key);}});
      if (Array.isArray(data.favorites)) favorites = [...new Set([...favorites,...data.favorites.filter(x=>typeof x==="string")])];
      saveHistory(); renderCustomCards(); showToast(`Importación lista: ${valid.length} cartas válidas revisadas.`);
    } catch { showToast("JSON inválido. Importa un archivo exportado por Parche Rolo."); }
  };
  reader.readAsText(file);
}
function renderSmartResults() { if (!$("#smartResults")) return;
  const box = $("#smartResults"); if (!box) return;
  const q = ($("#smartSearch")?.value || "").trim().toLocaleLowerCase("es");
  const type = $("#smartType")?.value || "todas";
  const items = TYPE_ORDER.flatMap(t => [...CARDS[t], ...customCards.filter(c=>c.type===t).map(c=>c.text)].map((text,i)=>({type:t,text,id:`${t}:${i}`}))).filter(c=>(type==="todas"||c.type===type)&&(!q||c.text.toLocaleLowerCase("es").includes(q)));
  box.textContent = `${items.length} cartas encontradas. ${items.slice(0,3).map(c=>c.text).join(" · ")}`;
}
function playSoundEffect() {
  const style = $("#soundStyle")?.value || "beep";
  if (style === "double") { playBeep(); setTimeout(playBeep, 130); return; }
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return;
    const ctx = new Ctx(), osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.type = "sine"; osc.frequency.value = style === "low" ? 180 : 660;
    gain.gain.setValueAtTime(.07, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .18);
    osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + .18); osc.onended = () => ctx.close();
  } catch {}
}
function applyTheme(theme) {
  document.body.dataset.theme = theme || "neon";
  try { localStorage.setItem("parcheRoloTheme", document.body.dataset.theme); } catch {}
}
$("#randomPlayerButton")?.addEventListener("click", randomPlayer);
$("#hotPotatoButton")?.addEventListener("click", startHotPotato);
$("#saveProfilesButton")?.addEventListener("click", saveProfiles);
$("#saveGameButton")?.addEventListener("click", () => { saveProfiles(); saveGame(true); });
$("#resumeGameButton")?.addEventListener("click", resumeGame);
$("#exportCardsButton")?.addEventListener("click", exportCardsAndResults);
$("#importCardsFile")?.addEventListener("change", e => { importCardsFile(e.target.files?.[0]); e.target.value=""; });
$("#themeSelect")?.addEventListener("change", e => applyTheme(e.target.value));
$("#smartSearch")?.addEventListener("input", renderSmartResults);
$("#smartType")?.addEventListener("change", renderSmartResults);
$("#avoidFavoritesToggle")?.addEventListener("change", () => showToast("Filtro de favoritas actualizado."));
$("#toggleFavoriteButton")?.addEventListener("click", () => {
  if (!currentCard) { showToast("Primero saca una tarjeta para marcarla."); return; }
  const id = `${currentType}:${currentCard.index}`;
  favorites = favorites.includes(id) ? favorites.filter(x=>x!==id) : [...favorites,id]; saveHistory();
  showToast(favorites.includes(id) ? "⭐ Carta marcada como favorita." : "Carta quitada de favoritas."); renderSmartResults();
});
try { applyTheme(localStorage.getItem("parcheRoloTheme") || "neon"); if ($("#themeSelect")) $("#themeSelect").value = document.body.dataset.theme; } catch { applyTheme("neon"); }

loadHistory();
renderPlayerFields();
renderProfilesEditor();
renderSmartResults();

// Registro opcional de eventos en MySQL cuando la app corre desde XAMPP/servidor PHP.
let serverSessionToken = '';
async function logServerEvent(type,data={}){try{const r=await fetch('api/event.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type,session:serverSessionToken,data})});if(r.ok){const j=await r.json();serverSessionToken=j.session||serverSessionToken;}}catch(e){/* La app sigue funcionando offline */}}
fetch('api/music.php').then(r=>r.ok?r.json():[]).then(rows=>{if(!Array.isArray(rows)||!rows.length)return;const available=rows.map(x=>x.filename).filter(x=>defaultPlaylist.includes(x));if(available.length){$$('.music-track-toggle').forEach(el=>{el.disabled=!available.includes(el.value);if(!available.includes(el.value))el.checked=false;});}}).catch(()=>{});

// Modos especiales, música local y efectos de interfaz
$$("[data-special]").forEach(button=>button.addEventListener("click",()=>{specialMode=button.dataset.special;$$("[data-special]").forEach(b=>b.classList.toggle("active",b===button));const messages={jugador:"Modo aleatoria: la ruleta escoge al jugador.",ruleta:"Modo ruleta: se sortea una carta al azar.",caliente:"Papa caliente: se pasan el celular hasta que se acabe el tiempo.",fiesta:"Modo Fiesta: solo preguntas y retos de parche para joder sanamente."};showToast(messages[specialMode]||"Modo actualizado.");}));
const defaultPlaylist = ['musica-parche.m4a','musica-parche-2.m4a','musica-parche-3.m4a','musica-parche-4.m4a','musica-parche-5.m4a','musica-parche-6.m4a','musica-parche-7.m4a'];
let activePlaylist = defaultPlaylist.slice(); let musicIndex = 0;
try { const savedTracks = JSON.parse(localStorage.getItem('parcheRoloMusicTracks') || 'null'); if (Array.isArray(savedTracks) && savedTracks.length) activePlaylist = savedTracks.filter(x=>defaultPlaylist.includes(x)); } catch {}
function playCurrentTrack(autoplay=true){const audio=$('#partyMusic');if(!audio||!activePlaylist.length)return; if(musicIndex>=activePlaylist.length)musicIndex=0;audio.src=activePlaylist[musicIndex];audio.load();if(autoplay)audio.play().catch(()=>showToast('Toca reproducir para iniciar la música.'));}
$('#partyMusic')?.addEventListener('ended',()=>{musicIndex=(musicIndex+1)%activePlaylist.length;playCurrentTrack(true);});
function syncMusicChecks(){ $$('.music-track-toggle').forEach(el=>el.checked=activePlaylist.includes(el.value)); }
syncMusicChecks();
$('#applyMusicSelection')?.addEventListener('click',()=>{const chosen=$$('.music-track-toggle:checked').map(el=>el.value).filter(x=>defaultPlaylist.includes(x));if(!chosen.length){showToast('Selecciona al menos una canción, mi llave.');return;}activePlaylist=chosen;musicIndex=0;try{localStorage.setItem('parcheRoloMusicTracks',JSON.stringify(activePlaylist));}catch{}playCurrentTrack(false);showToast('Selección de música guardada. Dale reproducir cuando quieras.');});
$('#musicToggle')?.addEventListener('click',()=>{const audio=$('#partyMusic');if(audio.paused)audio.play().catch(()=>showToast('No se pudo reproducir; toca de nuevo.'));else audio.pause();});
const musicVolume = $("#musicVolume");
if (musicVolume) {
  const applyMusicVolume = () => { const audio = $("#partyMusic"); if (audio) audio.volume = Number(musicVolume.value) / 100; };
  musicVolume.addEventListener("input", applyMusicVolume);
  applyMusicVolume();
}
document.addEventListener("click",e=>{const btn=e.target.closest("button");if(btn&&$("#soundSetting")?.checked)playSoundEffect();});

// Funciones nuevas de fiesta
$("#closeRoulette")?.addEventListener("click",()=>$("#roulettePanel").hidden=true);
$("#spinRoulette")?.addEventListener("click",spinRoulette);
$("#customCardsButton")?.addEventListener("click",openCustomCards);
$("#closeCustomCards")?.addEventListener("click",()=>$("#customCardsPanel").hidden=true);
$("#saveCustomCard")?.addEventListener("click",()=>{const text=$("#customCardText").value.trim(),type=$("#customCardType").value;if(!text){showToast("Escribe primero la tarjeta, parce.");return;}customCards.push({type,text});$("#customCardText").value="";saveHistory();renderCustomCards();showToast("¡Carta guardada para futuras partidas!");});
$("#statsButton")?.addEventListener("click",openStats);
["#closeStats","#closeStatsBottom"].forEach(sel=>$(sel)?.addEventListener("click",()=>$("#statsPanel").hidden=true));

$("#beginGameButton")?.addEventListener("click",()=>{roundCount=0;sessionStats={played:0,completed:0,passed:0};saveHistory();});


// Nuevos modos sociales de Parche Rolo (sin modo Duelito).
const rumbaCards = [
  "Ponga una canción que le suba el ánimo y haga el coro durante 15 segundos.",
  "Cuente la anécdota más chistosa que le haya pasado saliendo de fiesta.",
  "Haga su mejor paso de baile durante 10 segundos; el parche decide el nombre del paso.",
  "¿Cuál canción le recuerda una salida inolvidable con sus amigos? Cuente por qué.",
  "Imite cómo baila alguien cuando suena SU canción favorita, sin burlarse de nadie en particular.",
  "Arme en 20 segundos el plan perfecto para una noche de parche con poco presupuesto.",
  "Cante el coro de una canción famosa como si estuviera en un concierto en El Campín.",
  "Cuente el oso más grande que haya hecho intentando verse pinta.",
  "Invente un nombre y un eslogan para la rumba oficial de este parche.",
  "Haga una invitación dramática para que todos salgan este fin de semana."
];
const consequenceCards = [
  "Imite durante 15 segundos a un presentador anunciando la llegada del parche.",
  "Haga una pasarela con el objeto más cercano como si fuera ropa de diseñador.",
  "Invente un comercial de 20 segundos para vender una empanada imaginaria.",
  "Diga tres trabalenguas seguidos; si se equivoca, vuelva a intentarlo una vez.",
  "Haga una pose de portada de álbum y deje que el parche invente el título.",
  "Cuente una historia inventada de 20 segundos usando las palabras TransMi, empanada y ex.",
  "Haga un discurso de agradecimiento por ganar el premio a la persona más dramática.",
  "Imite una alarma de bus y luego anuncie la próxima parada como locutor.",
  "Invente un paso de baile y enséñeselo al grupo.",
  "Haga una declaración de amor exagerada a una silla o a un cojín."
];
let secretAnswers = [], tribunalVotes = {}, quickTimerInterval = null, quickTimerLeft = 20;
function openFeature(id) {
  if (!playerNames.length) { showToast("Primero escribe los nombres y comienza la partida, mi llave."); return; }
  const panel = $("#" + id); if (panel) panel.hidden = false;
}
function refreshTribunalCandidates() {
  const select = $("#tribunalCandidate"); if (!select) return;
  select.innerHTML = playerNames.map(n => `<option value="${escapeHTML(n)}">${escapeHTML(n)}</option>`).join("");
}
function revealTribunal() {
  const results = Object.entries(tribunalVotes).sort((a,b)=>b[1]-a[1]);
  const box = $("#tribunalResults"); if (!box) return;
  box.innerHTML = results.length ? `<p>🏛️ Veredicto por <b>${escapeHTML($("#tribunalTopic").value)}</b>:</p>` + results.map(([name,count],i)=>`<div class="podium-row rank-${i+1}"><b>${i===0?"👑 ":""}${escapeHTML(name)}</b><strong>${count} voto${count===1?"":"s"}</strong></div>`).join("") : "Todavía no hay votos. Emitan al menos uno primero.";
}
function openFinalRound() {
  showToast("💥 ¡Última ronda! Se cierra la recocha y se revela el podio.");
  showPodium();
  const title = $("#statsPanel h2"); if (title) title.textContent = "🏆 Última ronda · Campeón del parche";
  const summary = $("#statsSummary"); if (summary) summary.textContent += " · ¡Gracias por jugar Parche Rolo!";
}
$("#secretChismeButton")?.addEventListener("click", () => { if(!$(".extra-toggle[value=\"secretChismePanel\"]")?.checked){showToast("Marca Chismógrafo secreto en Extras antes de usarlo.");return;} secretAnswers=[]; $("#secretAnswer").value=""; $("#secretAnswers").textContent=""; $("#secretProgress").textContent="Respuestas: 0"; openFeature("secretChismePanel"); });
$("#submitSecretAnswer")?.addEventListener("click", () => {
  const answer=$("#secretAnswer").value.trim(); if(!answer){showToast("Escribe una respuesta antes de guardarla.");return;}
  secretAnswers.push({question:$("#secretQuestion").value,answer}); $("#secretAnswer").value="";
  $("#secretProgress").textContent=`Respuestas guardadas: ${secretAnswers.length}. Pasa el celular al siguiente jugador.`;
  if(secretAnswers.length>=playerNames.length) showToast("Todos respondieron. Pulsen revelar cuando estén listos.");
});
$("#revealSecretAnswers")?.addEventListener("click", () => {
  const box=$("#secretAnswers"); if(!secretAnswers.length){box.textContent="Todavía no hay respuestas.";return;}
  box.innerHTML=`<p><b>${escapeHTML(secretAnswers[0].question)}</b></p>`+secretAnswers.map((a,i)=>`<div class="custom-card-row"><span>Respuesta ${i+1}: ${escapeHTML(a.answer)}</span></div>`).join("");
});
$("#tribunalButton")?.addEventListener("click", () => { if(!$(".extra-toggle[value=\"tribunalPanel\"]")?.checked){showToast("Marca Tribunal del parche en Extras antes de usarlo.");return;} tribunalVotes={}; refreshTribunalCandidates(); $("#tribunalResults").textContent=""; $("#tribunalProgress").textContent="Votos emitidos: 0"; openFeature("tribunalPanel"); });
$("#submitTribunalVote")?.addEventListener("click", () => { const n=$("#tribunalCandidate").value; if(!n){showToast("Añade jugadores primero.");return;} tribunalVotes[n]=(tribunalVotes[n]||0)+1; $("#tribunalProgress").textContent=`Votos emitidos: ${Object.values(tribunalVotes).reduce((a,b)=>a+b,0)}`; showToast("Voto contado. Pasen el celular al siguiente votante."); });
$("#finishTribunalVote")?.addEventListener("click", revealTribunal);
$("#finalRoundButton")?.addEventListener("click", () => { if(!$(".extra-toggle[value=\"finalRoundPanel\"]")?.checked){showToast("Marca Última ronda en Extras antes de usarla.");return;} openFinalRound(); });
$("#quickTimerButton")?.addEventListener("click", () => { if(!$(".extra-toggle[value=\"quickTimerPanel\"]")?.checked){showToast("Marca Contra reloj en Extras antes de usarlo.");return;} clearInterval(quickTimerInterval); quickTimerLeft=Number($("#quickTimerDuration").value)||20; $("#quickTimerDisplay").textContent=quickTimerLeft; $("#quickTimerMessage").textContent="Listos… preparados…"; openFeature("quickTimerPanel"); });
$("#quickTimerDuration")?.addEventListener("change", () => { if(!quickTimerInterval){quickTimerLeft=Number($("#quickTimerDuration").value)||20;$("#quickTimerDisplay").textContent=quickTimerLeft;} });
$("#startQuickTimer")?.addEventListener("click", () => { clearInterval(quickTimerInterval); quickTimerLeft=Number($("#quickTimerDuration").value)||20; $("#quickTimerDisplay").textContent=quickTimerLeft; $("#quickTimerMessage").textContent="¡Responda antes de que llegue a cero!"; quickTimerInterval=setInterval(()=>{quickTimerLeft--;$("#quickTimerDisplay").textContent=quickTimerLeft;if(quickTimerLeft<=0){clearInterval(quickTimerInterval);quickTimerInterval=null;$("#quickTimerMessage").textContent="⏰ ¡Se acabó el tiempo! Si no respondió, gire la ruleta de consecuencias.";playSoundEffect();showToast("⏰ ¡Tiempo! Si pasó, le toca penitencia.");}},1000); });
$("#stopQuickTimer")?.addEventListener("click",()=>{clearInterval(quickTimerInterval);quickTimerInterval=null;$("#quickTimerMessage").textContent="Cuenta regresiva detenida.";});
$("#consequenceRouletteButton")?.addEventListener("click",()=>{ if(!$(".extra-toggle[value=\"consequencePanel\"]")?.checked){showToast("Marca Ruleta de consecuencias en Extras antes de usarla.");return;} $("#consequenceResult").textContent="Gira la ruleta para sacar una penitencia.";openFeature("consequencePanel"); });
$("#spinConsequence")?.addEventListener("click",()=>{const wheel=$("#consequenceWheel");wheel.classList.remove("spinning");void wheel.offsetWidth;wheel.classList.add("spinning");const chosen=consequenceCards[Math.floor(Math.random()*consequenceCards.length)];$("#consequenceResult").textContent="🎡 Girando…";setTimeout(()=>{$("#consequenceResult").textContent="La penitencia es: "+chosen;},1100);});
$("#rumbaRoundButton")?.addEventListener("click",()=>{ if(!$(".extra-toggle[value=\"rumbaPanel\"]")?.checked){showToast("Marca Ronda de rumba en Extras antes de usarla.");return;} $("#rumbaCardText").textContent="Pulsa para sacar la primera carta.";openFeature("rumbaPanel"); });
$("#nextRumbaCard")?.addEventListener("click",()=>{ $("#rumbaCardText").textContent=rumbaCards[Math.floor(Math.random()*rumbaCards.length)]; });
$$("[data-close-panel]").forEach(btn=>btn.addEventListener("click",()=>{const panel=$("#"+btn.dataset.closePanel);if(panel)panel.hidden=true;}));
