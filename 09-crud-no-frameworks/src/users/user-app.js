import { renderFloatingButton } from "./presentation/floating-button/render-floating-button";
import { renderButons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 * @returns ???
 */

export const usersApp = async( element ) => {
  
  
  await usersStore.loadNextPage();

  renderTable( element );
  renderButons( element );
  renderFloatingButton( element );
  renderModal( element );

}