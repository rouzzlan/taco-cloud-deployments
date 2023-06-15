# Testing Instructions

## Address-service

deployed following files

- [config_address-service.yaml](../../config_address-service.yaml)
- [deployment_address-service.yaml](../../deployment_address-service.yaml)
- [endpoint.yaml](../../endpoint.yaml) (needs only once)
- [service_address-service.yaml](../../service_address-service.yaml)

server `k8s-a-master-node.739.net`, service running on port `32010`.
#### get by id
```sh
curl http://k8s-a-master-node.739.net:32010/address/c49a20095a4f5ac6f83a3c0ff33854327b1cf3c2c5b39aa6f934c1fe53c1dd61
```
output
```json
{"id":"644874b3777555522fd294ca","street":"Kloosterstraat 27A","city":"Emblem","state":"Antwerpen","country":"BE","zip":"2520","hash":"c49a20095a4f5ac6f83a3c0ff33854327b1cf3c2c5b39aa6f934c1fe53c1dd61"}
```

## Credit Card Service
the endpoint manifest [endpoint.yaml](../../endpoint.yaml) should be already be deployed</br>
deployment manifest files

- [config_cc-service.yaml](../../config_cc-service.yaml)
- [deployment_cc-service.yaml](../../deployment_cc-service.yaml)
- [service_cc-service.yaml](../../service_cc-service.yaml)

#### get by id
```sh
curl http://k8s-a-master-node.739.net:32011/creditcard/90144e63116d1be8455a9ff7ddbe480c92c791a298026d4c2bafa7d6388b6285
```
output
```json lines
{"cvv":999,"expiration":"10/10","hash":"90144e63116d1be8455a9ff7ddbe480c92c791a298026d4c2bafa7d6388b6285","number":"5364965554644555","owner":"Rouslan Khayaouri"}
```

## Taco order service
the endpoint manifest [endpoint.yaml](../../endpoint.yaml) should be already be deployed</br>
deployment manifest files
- [config_taco-order-service.yaml](../../config_taco-order-service.yaml)
- [deployment_taco-order-service.yaml](../../deployment_taco-order-service.yaml)
- [service_taco-order-service.yaml](../../service_taco-order-service.yaml)

#### get all orders
```sh
curl http://k8s-a-master-node.739.net:32012/order
```
output
```json lines
[{"id":"646e5921ba3cd06728e327f3","uuid":"83decfbc-4673-47f3-ba32-8c00bbbb0698","name":"myOrder","email":"me@home.com","addrRef":"755241ea8bb0d609107a640673292264ca451e550dd39dd5c9bbb86ec8a5895f","ccardRef":"90144e63116d1be8455a9ff7ddbe480c92c791a298026d4c2bafa7d6388b6285"}]
```
#### get order by id
```sh
curl http://k8s-a-master-node.739.net:32012/order/646e5921ba3cd06728e327f3

```
output
```json lines
{"id":"646e5921ba3cd06728e327f3","uuid":"83decfbc-4673-47f3-ba32-8c00bbbb0698","name":"myOrder","email":"me@home.com","addrRef":"755241ea8bb0d609107a640673292264ca451e550dd39dd5c9bbb86ec8a5895f","ccardRef":"90144e63116d1be8455a9ff7ddbe480c92c791a298026d4c2bafa7d6388b6285"}
```

## Payment management service

the endpoint manifest [endpoint.yaml](../../endpoint.yaml) should be already be deployed</br>
deployment manifest files

- [config_payment-management-service.yaml](../../config_payment-management-service.yaml)
- [deployment_payment-management-service.yaml](../../deployment_payment-management-service.yaml)
- [service_payment-management-service.yaml](../../service_payment-management-service.yaml)

#### get order by id

```sh
curl http://k8s-a-master-node.739.net:32015/api/order/646e5921ba3cd06728e327f3
```

output

```json
{
  "creditCard": {
    "number": "5364965554644555",
    "expiration": "10/10",
    "cvv": 999,
    "owner": "Rouslan Khayaouri",
    "hash": "90144e63116d1be8455a9ff7ddbe480c92c791a298026d4c2bafa7d6388b6285"
  },
  "order": {
    "id": "646e5921ba3cd06728e327f3",
    "uuid": "83decfbc-4673-47f3-ba32-8c00bbbb0698",
    "name": "myOrder",
    "email": "me@home.com",
    "ccardRef": "90144e63116d1be8455a9ff7ddbe480c92c791a298026d4c2bafa7d6388b6285",
    "addrRef": "755241ea8bb0d609107a640673292264ca451e550dd39dd5c9bbb86ec8a5895f"
  }
}
```

## Delivery management service

the endpoint manifest [endpoint.yaml](../../endpoint.yaml) should be already be deployed</br>
deployment manifest files

- [config_delivery-management-service.yaml](../../config_delivery-management-service.yaml)
- [deployment_delivery-management-service.yaml](../../deployment_delivery-management-service.yaml)
- [service_delivery-management-service.yaml](../../service_delivery-management-service.yaml)

#### get order by id

```sh
curl http://k8s-a-master-node.739.net:32016/api/order/646e5921ba3cd06728e327f3
```

output

```json
{
  "order": {
    "id": "646e5921ba3cd06728e327f3",
    "uuid": "83decfbc-4673-47f3-ba32-8c00bbbb0698",
    "name": "myOrder",
    "email": "me@home.com",
    "ccardRef": "90144e63116d1be8455a9ff7ddbe480c92c791a298026d4c2bafa7d6388b6285",
    "addrRef": "755241ea8bb0d609107a640673292264ca451e550dd39dd5c9bbb86ec8a5895f"
  },
  "address": {
    "street": "Kerkstraat 123",
    "city": "Hoboken",
    "state": "Antwerp",
    "country": "BE",
    "zip": "1929",
    "hash": "755241ea8bb0d609107a640673292264ca451e550dd39dd5c9bbb86ec8a5895f"
  }
}
```

## Order sender/receiver service

the endpoint manifest [endpoint.yaml](../../endpoint.yaml) should be already be deployed</br>
deployment manifest files

### Order sender

files:

- [config_order-sender.yaml](../../config_order-sender.yaml)
- [deployment_order-sender-service.yaml](../../deployment_order-sender-service.yaml)
- [service_order-sender-service.yaml](../../service_order-sender-service.yaml)

### Order receiver

files
- [config_order-receiver.yaml](../../config_order-receiver.yaml)
- [deployment_order-receiver-service.yaml](../../deployment_order-receiver-service.yaml)

### test

verify orders. the [taco-order-service](#taco-order-service) has to be up.
```sh
curl http://k8s-a-master-node.739.net:32012/order
```
post order
 
```sh
curl -X POST http://k8s-a-master-node.739.net:32017/order/ \
  -H 'Content-Type: application/json' \
  -d '{"name":"myOrder","email":"me@home.com","address":{"street":"Kerkstraat 123","city":"Hoboken","zip":"1929","state":"Antwerp","country":"BE"},"cCard":{"number":"5364965554644555","owner":"Rouslan Khayaouri","expiration":"10/10","cvv":999}}'
```

response
```json

```
verify if added
```sh
curl http://k8s-a-master-node.739.net:32012/order
```
output
```json
[{"id":"646e5921ba3cd06728e327f3","uuid":"83decfbc-4673-47f3-ba32-8c00bbbb0698","name":"myOrder","email":"me@home.com","addrRef":"755241ea8bb0d609107a640673292264ca451e550dd39dd5c9bbb86ec8a5895f","ccardRef":"90144e63116d1be8455a9ff7ddbe480c92c791a298026d4c2bafa7d6388b6285"},{"id":"648b4fcf52a414139e97d002","uuid":"5e827e32-ccfd-4427-9b40-602fcdbc5055","name":"myOrder","email":"me@home.com","addrRef":"755241ea8bb0d609107a640673292264ca451e550dd39dd5c9bbb86ec8a5895f","ccardRef":"90144e63116d1be8455a9ff7ddbe480c92c791a298026d4c2bafa7d6388b6285"}]
```
### notes
somehow the first call does not work.