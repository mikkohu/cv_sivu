import React from 'react';
import ReactDOM from 'react-dom';


export default function ItemNode({name, items, attr, tab}) {
    const hasChildren =  items && items.length;
    const hasAttr = attr && attr.length

    const attributeNames = hasAttr ? attr.map(att => `${att.key}="${att.value}"`) : '';
    
    
    console.log(attributeNames);
    return (
        <details key={name + tab} style={{ paddingLeft: tab * 10 + 'px' }}>
                <summary>
                    {`<${name} ${hasAttr ? attributeNames : ""}>`}
                </summary>
                    {hasChildren && items.map((item) =>
                    (<ItemNode key={item.name+item.tab} {...item} tab={tab+1}>
                    </ItemNode>))}
            </details>
    )
}
// export default class ItemNode extends React.PureComponent {
//     render() {
//         let hasChildren = this.props.items && this.props.items.length;
//         let hasAttr = this.props.attr && this.props.attr.length;
//         return (
//             <details key={this.props.name + this.props.tab} style={{ paddingLeft: this.props.tab * 10 + 'px' }}>
//                 <summary>
//                     {`<${this.props.name} >`}
//                 </summary>
//                     {hasChildren && this.props.items.map((item) =>
//                     (<ItemNode key={item.name+item.tab} {...item} tab={this.props.tab+1}>
//                     </ItemNode>))}
//             </details>
//         )
//     }
// }