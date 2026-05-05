export type Locale = 'en' | 'es';

const en = {
	'nav.problem': 'problem',
	'nav.thesis': 'thesis',
	'nav.receipts': 'receipts',
	'nav.code': 'code',

	'hero.eyebrow.1': 'INFRASTRUCTURE',
	'hero.eyebrow.2': 'flat-rate inference',
	'hero.eyebrow.3': 'no token meter',
	'hero.h1':
		'<span class="fx-arrow"></span><span class="fx-block loud">STOP</span> PAYING<br />PER TOKEN FOR<br />MODELS YOU<br /><span class="fx-outline">DON\'T</span> EVEN<br />OWN',
	'hero.sub':
		'Every API call is a slot machine. Your retry loop. Your runaway agent at 3am. Your customer hitting the same endpoint 400 times because of a bug. All metered. All billed. All compounding into an invoice written by <b>someone who profits when your code misbehaves</b>.',
	'hero.cta.primary': 'join the cluster <span>&rarr;</span>',
	'hero.cta.secondary': 'read the problem',

	'problem.title': 'The problem.',
	'problem.kicker': 'comparison · metered vs flat-rate',
	'problem.lede':
		'Token billing was designed to make your costs <b>unpredictable on purpose</b>. The more your product works, the more you pay. The better your prompts get, the longer they grow. Success is the punishment.',
	'problem.compare.headLeft': 'closed APIs · pay per token',
	'problem.compare.headRight': 'NaN · flat €70/month',
	'problem.compare.r1L': '× a buggy loop wakes you up to a $2k bill',
	'problem.compare.r1R':
		'✓ burn all the tokens you want · the bill never moves',
	'problem.compare.r2L': '× rate limits throttle production at 3am',
	'problem.compare.r2R':
		'✓ shared cluster sized for builders who actually ship',
	'problem.compare.r3L': '× prompts logged, stored, used to train',
	'problem.compare.r3R': '✓ zero logs · prompts never leave your session',
	'problem.compare.r4L': '× price hikes with zero negotiation',
	'problem.compare.r4R': '✓ same price next month · same price next year',
	'problem.compare.r5L': '× model weights are secret',
	'problem.compare.r5R':
		'✓ Qwen, Gemma, DeepSeek · public weights · audit everything',
	'problem.compare.r6L': '× model deprecated whenever they feel like it',
	'problem.compare.r6R': '✓ models voted by the community every quarter',
	'problem.compare.r7L': '× you cap your own users to protect your margin',
	'problem.compare.r7R': '✓ ship the product you actually wanted to ship',
	'problem.compare.r8L': '× lock-in cost exceeds annual migration budget',
	'problem.compare.r8R':
		"✓ OpenAI-compatible API · swap base_url and you're out",

	'numbers.title': 'The numbers.',
	'numbers.kicker': 'receipts · 100% verified',
	'numbers.s1': 'flat monthly fee · all you can inference',
	'numbers.s2': 'VRAM per node · NVIDIA RTX PRO 6000 Blackwell',
	'numbers.s3': 'tokens metered · prompts logged · surprises billed',

	'thesis.title': 'The thesis.',
	'thesis.kicker': 'manifesto · one per page',
	'thesis.body':
		'<span>OPEN MODELS GOT GOOD ENOUGH</span><span>TWELVE MONTHS AGO. THE GPUS</span><span>EXIST. THE STACK IS SOLVED.</span><span></span><span>YOU\'RE STILL PAYING PER TOKEN</span><span>BECAUSE NOBODY TOLD YOU</span><span class="fx-block loud">YOU COULD STOP.</span>',

	'loss.title': 'What token billing costs you.',
	'loss.kicker': '6 categories · honest audit',
	'loss.c1':
		"A flat fee means you can plan, price, and sleep. With token billing every demo day, every viral tweet, every aggressive user is a financial event. You stop building features because you can't model the cost.",
	'loss.c2':
		'Token meters punish iteration. Long context? Expensive. Tool calls in a loop? Expensive. Reasoning models thinking out loud? Very expensive. You ship worse products because the better version costs too much to test.',
	'loss.c3':
		"Free tier capped at 10 messages. Pro tier capped at 200. Why? Not because the model can't handle more. Because your margin can't. Your users feel it. They churn. The cap was always about you, not them.",
	'loss.c4':
		"Every prompt you send becomes their training signal. Your competitors' queries. Your customers' secrets. Their next model. Your liability. Reading the ToS doesn't make it disappear. It just confirms it.",
	'loss.c5':
		"Open models like Qwen, Gemma, DeepSeek, Llama closed the gap. They're inside the cluster. You don't have to wait for a closed lab to release the version that's already on Hugging Face. The future is open and it already shipped.",
	'loss.c6':
		"NaN speaks the OpenAI API. If you ever want to leave, change one base_url and you're out. No proprietary SDK, no bespoke endpoints, no lock-in. The cost of switching is one line of code. That's the deal.",

	'code.title': "It's literally one line.",
	'code.kicker': 'code · actual diff',
	'code.lede':
		'Stop pretending migration is hard. NaN exposes an OpenAI-compatible API. If your code already calls OpenAI, this is the entire diff:',

	'receipts.title': 'Their pricing pages say this.',
	'receipts.kicker': 'direct quotes · verbatim',
	'receipts.q1': '"PRICED PER 1M INPUT TOKENS"',
	'receipts.q2': '"OUTPUT TOKENS BILLED SEPARATELY"',
	'receipts.q3': '"CACHED INPUT AT A DIFFERENT RATE"',
	'receipts.q4': '"REASONING TOKENS COUNT AS OUTPUT"',
	'receipts.q5': '"RATE LIMITS APPLY PER TIER"',
	'receipts.q6': '"PRICING SUBJECT TO CHANGE"',
	'receipts.q7': '"USAGE MAY BE USED TO IMPROVE OUR MODELS"',
	'receipts.q8': '"OVERAGES BILLED AT END OF CYCLE"',
	'receipts.footer': 'EVERY LINE IS A REASON TO LEAVE.',

	'cta.title': 'Just use NaN.',
	'cta.kicker': 'deployment · immediate',
	'cta.lede':
		'€70 a month. Shared GPU. Open models. No token meter. No surprise invoices. No prompts logged. The only thing standing between you and a predictable AI bill is the decision to stop feeding the meter.',
	'cta.primary': 'join the cluster <span>&rarr;</span>',
	'cta.secondary': 'read the docs',
	'cta.strip.1': 'flat rate',
	'cta.strip.2': 'open models',
	'cta.strip.3': 'zero logs',
	'cta.strip.4': 'no token meter',

	'foot.tag': '// just-use-nan v1.0 · 2026 · flat-rate inference, open future',
	'foot.l1': 'github',
	'foot.l2': 'docs',
	'foot.l3': 'join nan',
};

const es: typeof en = {
	'nav.problem': 'problema',
	'nav.thesis': 'tesis',
	'nav.receipts': 'pruebas',
	'nav.code': 'código',

	'hero.eyebrow.1': 'INFRAESTRUCTURA',
	'hero.eyebrow.2': 'inferencia a coste fijo',
	'hero.eyebrow.3': 'sin contador de tokens',
	'hero.h1':
		'<span class="fx-arrow"></span><span class="fx-block loud">DEJA</span> DE PAGAR<br />POR TOKEN POR<br />MODELOS QUE<br /><span class="fx-outline">NO</span> SON<br />TUYOS',
	'hero.sub':
		'Cada llamada a la API es una tragaperras. Tu bucle de reintentos. Tu agente desbocado a las 3 de la mañana. Tu usuario pegándole 400 veces al mismo endpoint por un bug. Todo medido. Todo facturado. Todo apilándose en una factura escrita por <b>alguien que gana dinero cuando tu código se equivoca</b>.',
	'hero.cta.primary': 'únete al cluster <span>&rarr;</span>',
	'hero.cta.secondary': 'lee el problema',

	'problem.title': 'El problema.',
	'problem.kicker': 'comparativa · contador vs coste fijo',
	'problem.lede':
		'El billing por token está diseñado para ser <b>imprevisible a propósito</b>. Cuanto mejor funciona tu producto, más pagas. Cuanto mejores son tus prompts, más largos se vuelven. El éxito es el castigo.',
	'problem.compare.headLeft': 'APIs cerradas · pago por token',
	'problem.compare.headRight': 'NaN · 70€/mes fijos',
	'problem.compare.r1L':
		'× un bucle con bug te despierta con una factura de 2.000$',
	'problem.compare.r1R':
		'✓ quema todos los tokens que quieras · la factura no se mueve',
	'problem.compare.r2L':
		'× rate limits ahogando producción a las 3 de la mañana',
	'problem.compare.r2R':
		'✓ cluster compartido dimensionado para builders que envían',
	'problem.compare.r3L':
		'× prompts registrados, almacenados, usados para entrenar',
	'problem.compare.r3R': '✓ zero logs · tus prompts no salen de tu sesión',
	'problem.compare.r4L': '× subidas de precio sin negociación posible',
	'problem.compare.r4R': '✓ mismo precio el mes que viene · y el año que viene',
	'problem.compare.r5L': '× los pesos del modelo son secretos',
	'problem.compare.r5R':
		'✓ Qwen, Gemma, DeepSeek · pesos públicos · audita lo que quieras',
	'problem.compare.r6L': '× depreciaciones de modelo cuando les apetece',
	'problem.compare.r6R': '✓ modelos votados por la comunidad cada trimestre',
	'problem.compare.r7L':
		'× capas a tus propios usuarios para proteger tu margen',
	'problem.compare.r7R': '✓ envía el producto que querías enviar de verdad',
	'problem.compare.r8L': '× el coste del lock-in supera al de migrar cada año',
	'problem.compare.r8R':
		'✓ API compatible con OpenAI · cambias base_url y fuera',

	'numbers.title': 'Los números.',
	'numbers.kicker': 'recibos · 100% verificados',
	'numbers.s1': 'tarifa mensual fija · barra libre de inferencia',
	'numbers.s2': 'VRAM por nodo · NVIDIA RTX PRO 6000 Blackwell',
	'numbers.s3': 'tokens medidos · prompts logueados · sorpresas en factura',

	'thesis.title': 'La tesis.',
	'thesis.kicker': 'manifiesto · uno por página',
	'thesis.body':
		'<span>LOS MODELOS ABIERTOS YA SON</span><span>LO BASTANTE BUENOS. LAS GPUS</span><span>EXISTEN. EL STACK ESTÁ RESUELTO.</span><span></span><span>SIGUES PAGANDO POR TOKEN</span><span>PORQUE NADIE TE HA DICHO</span><span class="fx-block loud">QUE PUEDES PARAR.</span>',

	'loss.title': 'Lo que te cuesta el billing por token.',
	'loss.kicker': '6 categorías · auditoría honesta',
	'loss.c1':
		'Una tarifa fija te deja planificar, fijar precios y dormir. Con billing por token cada demo day, cada tweet viral, cada usuario agresivo es un evento financiero. Dejas de construir features porque no puedes modelar el coste.',
	'loss.c2':
		'El contador castiga la iteración. ¿Contexto largo? Caro. ¿Tool calls en bucle? Caro. ¿Modelos de razonamiento pensando en voz alta? Carísimo. Envías productos peores porque la versión buena cuesta demasiado de probar.',
	'loss.c3':
		'Tier gratis con 10 mensajes. Tier pro con 200. ¿Por qué? No porque el modelo no aguante más. Porque tu margen no aguanta. Tus usuarios lo notan. Se van. El cap nunca fue por ellos, fue por ti.',
	'loss.c4':
		'Cada prompt que mandas se convierte en su señal de entrenamiento. Las queries de tus competidores. Los secretos de tus clientes. Su próximo modelo. Tu responsabilidad legal. Leer los ToS no lo hace desaparecer. Solo lo confirma.',
	'loss.c5':
		'Los modelos abiertos como Qwen, Gemma, DeepSeek, Llama han cerrado la brecha. Están dentro del cluster. No tienes que esperar a que un lab cerrado libere la versión que ya está en Hugging Face. El futuro es abierto y ya llegó.',
	'loss.c6':
		'NaN habla la API de OpenAI. Si algún día quieres irte, cambias un base_url y estás fuera. Sin SDK propietario, sin endpoints custom, sin lock-in. El coste de cambiar es una línea de código. Ese es el trato.',

	'code.title': 'Es literalmente una línea.',
	'code.kicker': 'código · diff real',
	'code.lede':
		'Deja de fingir que migrar es difícil. NaN expone una API compatible con OpenAI. Si tu código ya llama a OpenAI, este es el diff entero:',

	'receipts.title': 'Sus páginas de pricing dicen esto.',
	'receipts.kicker': 'citas directas · textuales',
	'receipts.q1': '"PRECIO POR 1M DE TOKENS DE INPUT"',
	'receipts.q2': '"OUTPUT TOKENS FACTURADOS APARTE"',
	'receipts.q3': '"INPUT CACHEADO A OTRA TARIFA"',
	'receipts.q4': '"LOS REASONING TOKENS CUENTAN COMO OUTPUT"',
	'receipts.q5': '"RATE LIMITS SEGÚN TIER"',
	'receipts.q6': '"PRECIOS SUJETOS A CAMBIO"',
	'receipts.q7': '"PODEMOS USAR TU USO PARA MEJORAR NUESTROS MODELOS"',
	'receipts.q8': '"EXCESOS FACTURADOS AL FINAL DEL CICLO"',
	'receipts.footer': 'CADA LÍNEA ES UNA RAZÓN PARA IRTE.',

	'cta.title': 'Just use NaN.',
	'cta.kicker': 'despliegue · inmediato',
	'cta.lede':
		'70€ al mes. GPU compartida. Modelos abiertos. Sin contador de tokens. Sin facturas sorpresa. Sin prompts logueados. Lo único que se interpone entre tú y una factura de IA predecible es la decisión de dejar de alimentar el contador.',
	'cta.primary': 'únete al cluster <span>&rarr;</span>',
	'cta.secondary': 'leer la documentación',
	'cta.strip.1': 'tarifa fija',
	'cta.strip.2': 'modelos abiertos',
	'cta.strip.3': 'zero logs',
	'cta.strip.4': 'sin contador',

	'foot.tag':
		'// just-use-nan v1.0 · 2026 · inferencia a coste fijo, futuro abierto',
	'foot.l1': 'github',
	'foot.l2': 'docs',
	'foot.l3': 'únete a nan',
};

export type T = typeof en;
export const translations: Record<Locale, T> = { en, es };
