
// this is the html template for the alibi
                `<div class="alibiDisplay__title">Suspect Under Investigation:</div>
                <div class="suspectName">${SUSPECT NAME}</div>
                <div class="suspectAssociates">
                    <div class="suspectAssociates__title">Known Associates:</div>
                    <!-- the two divs below here will be in  template literal.
                        Iterate over the associates array and generate html.  -->
                    <div class="associateName">Associate name:${DASSOCIATE NAME}</div>
                    <div class="associateAlibi">Alibi ${ALIBI}</div>
                </div>`