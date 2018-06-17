import { h } from 'preact';
import Modal from './Modal.jsx';

export function HelpModal(props) {
	return (
		<Modal show={props.show} closeHandler={props.closeHandler}>
			<h1>
				<div class="web-maker-with-tag">Web Maker</div>
				<small style="font-size:14px;"> v3.2.0</small>
			</h1>

			<div>
				<p>
					Made with <span style="margin-right: 8px;">💖</span> &{' '}
					<span style="margin-right: 8px;">🙌</span> by{' '}
					<a
						href="https://twitter.com/chinchang457"
						target="_blank"
						rel="noopener noreferrer"
					>
						Kushagra Gour
					</a>
				</p>
				<p>
					<a href="/docs" target="_blank" rel="noopener noreferrer">
						Read the documentation
					</a>.
				</p>
				<p>
					Tweet out your feature requests, comments & suggestions to{' '}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://twitter.com/webmakerApp"
					>
						@webmakerApp
					</a>.
				</p>
				<p>
					Like this extension? Please{' '}
					<a
						href="https://chrome.google.com/webstore/detail/web-maker/lkfkkhfhhdkiemehlpkgjeojomhpccnh/reviews"
						target="_blank"
						rel="noopener noreferrer"
					>
						rate it here
					</a>.
				</p>
				<p>
					<button
						aria-label="Support the developer"
						d-click="openSupportDeveloperModal"
						data-event-action="supportDeveloperHelpBtnClick"
						class="btn btn-icon"
					>
						<svg>
							<use xlinkHref="#gift-icon" />
						</svg>Support the developer
					</button>{' '}
					<a
						aria-label="Rate Web Maker"
						href="https://chrome.google.com/webstore/detail/web-maker/lkfkkhfhhdkiemehlpkgjeojomhpccnh/reviews"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-icon"
					>
						<svg>
							<use xlinkHref="#heart-icon" />
						</svg>Share Web Maker
					</a>{' '}
					<a
						aria-label="Chat"
						href="https://web-maker.slack.com"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-icon"
					>
						<svg>
							<use xlinkHref="#chat-icon" />
						</svg>Chat
					</a>{' '}
					<a
						aria-label="Report a Bug"
						href="https://github.com/chinchang/web-maker/issues"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-icon"
					>
						<svg>
							<use xlinkHref="#bug-icon" />
						</svg>Report a bug
					</a>
				</p>

				<p>
					<h3>Awesome libraries used</h3>
					<ul>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://kushagragour.in/lab/hint/"
							>
								Hint.css
							</a>{' '}
							&
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/chinchang/screenlog.js"
							>
								Screenlog.js
							</a>{' '}
							- By me :)
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://nathancahill.github.io/Split.js/"
							>
								Split.js
							</a>{' '}
							- Nathan Cahill
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://codemirror.net/"
							>
								Codemirror
							</a>{' '}
							- Marijn Haverbeke
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://emmet.io/"
							>
								Emmet
							</a>{' '}
							- Sergey Chikuyonok
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="http://esprima.org/"
							>
								Esprima
							</a>{' '}
							- Ariya Hidayat
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/enjalot/Inlet"
							>
								Inlet
							</a>{' '}
							- Ian Johnson
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://webmakerapp.com/"
							>
								Web Maker!
							</a>{' '}
							- whhat!
						</li>
					</ul>
				</p>

				<p>
					<h3>License</h3>
					"Web Maker" is{' '}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/chinchang/web-maker"
					>
						open-source
					</a>{' '}
					under the{' '}
					<a
						href="https://opensource.org/licenses/MIT"
						target="_blank"
						rel="noopener noreferrer"
					>
						MIT License
					</a>.
				</p>
			</div>
		</Modal>
	);
}
