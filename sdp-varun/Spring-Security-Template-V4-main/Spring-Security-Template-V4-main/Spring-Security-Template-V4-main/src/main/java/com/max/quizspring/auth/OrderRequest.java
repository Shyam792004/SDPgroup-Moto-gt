//Order-Request//package com.srivarshini.sdp.controller;
package com.max.quizspring.auth;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {
    private Long userId;
    private Long productId;
    private String userAddress;
    private String payMethod;
   
    
}