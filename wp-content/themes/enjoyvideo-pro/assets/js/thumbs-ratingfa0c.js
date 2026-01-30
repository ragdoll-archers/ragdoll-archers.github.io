/**
 * @param  {number} ID
 * @param  {number} type
 * @param  {HTMLElement} $element
 */
function thumbs_rating_vote(ID, type) {
	const itemName = `thumbsrating${ID}`; // For the LocalStorage
	const IDS = {
		container: `thumbs-rating-${ID}`
	};
	const CLASSES = {
		alreadyVoted: `thumbs-rating-already-voted`,
		container: `thumbs-rating-container`,
		down: `thumbs-rating-down`,
		up: `thumbs-rating-up`,
		show: `thumbs-rating-show`,
		voted: `thumbs-rating-voted`
	};
	const $container = document.getElementById(IDS.container);

	// Check if the LocalStorage value exist. If do nothing.
	if (!localStorage.getItem(itemName)) {
		// Set the localStorage type as well
		const typeItemName = `${itemName}-${type}`;

		// Set HTML5 LocalStorage so the user can not vote again unless the user clears it.
		localStorage.setItem(itemName, true);
		localStorage.setItem(typeItemName, true);

		// Data for the Ajax Request
		const data = new FormData();

    data.append( 'action', 'thumbs_rating_add_vote' );
    data.append( 'nonce', thumbs_rating_ajax.nonce );
    data.append( 'postid', ID );
    data.append( 'type', type );

    fetch(thumbs_rating_ajax.ajax_url, {
				method: "POST",
				credentials: 'same-origin',
				body: data
			})
			.then((response) => response.text())
			.then((data) => {
				if (data && $container) {
					$container.innerHTML = data;
				}
			})
			.catch((error) => {
				console.log('[Thumbs Rating Plugin - error]');
				console.error(error);
			});

	} else {
		if ($container) {
			const $alreadyVoted = $container.querySelector(`.${CLASSES.alreadyVoted}`);

			// Display message if we detect LocalStorage
			if ($alreadyVoted) {
				$alreadyVoted.classList.add(CLASSES.show);
			}
		}
	}
}